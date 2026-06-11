/**
 * Client-side Analytics Tracker
 * Tracks user interactions, page views, and chat metrics
 */

class ClientAnalyticsTracker {
  constructor() {
    this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    this.pageViewData = [];
    this.events = [];
    this.chatMetrics = {};
    this.init();
  }

  init() {
    this.trackPageView();
    this.attachGlobalListeners();
    this.setupBeaconOnUnload();
  }

  trackPageView() {
    const pageView = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    this.pageViewData.push(pageView);
    this.sendBeacon('pageView', pageView);
  }

  trackEvent(eventName, eventData = {}) {
    const event = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      eventName: eventName,
      eventData: eventData,
      page: window.location.pathname
    };

    this.events.push(event);
    console.log(`📊 Event tracked: ${eventName}`, eventData);
  }

  trackChatMessage(message, role, cost = 0) {
    const timestamp = Date.now();
    
    if (!this.chatMetrics.messages) {
      this.chatMetrics.messages = [];
    }

    this.chatMetrics.messages.push({
      timestamp: new Date().toISOString(),
      role: role,
      messageLength: message.length,
      cost: cost
    });

    // Update aggregate metrics
    if (!this.chatMetrics.aggregates) {
      this.chatMetrics.aggregates = {
        totalMessages: 0,
        totalCost: 0,
        userMessages: 0,
        assistantMessages: 0
      };
    }

    this.chatMetrics.aggregates.totalMessages += 1;
    this.chatMetrics.aggregates.totalCost += cost;
    
    if (role === 'user') {
      this.chatMetrics.aggregates.userMessages += 1;
    } else if (role === 'assistant') {
      this.chatMetrics.aggregates.assistantMessages += 1;
    }
  }

  trackChatOpen() {
    this.trackEvent('chat_opened', {
      timestamp: Date.now()
    });
  }

  trackChatClose() {
    this.trackEvent('chat_closed', {
      timestamp: Date.now(),
      messageCount: this.chatMetrics.aggregates?.totalMessages || 0,
      totalCost: this.chatMetrics.aggregates?.totalCost || 0
    });
  }

  trackClickEvent(elementId, elementType) {
    this.trackEvent('element_clicked', {
      elementId: elementId,
      elementType: elementType,
      timestamp: Date.now()
    });
  }

  trackScrollDepth() {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    this.trackEvent('scroll_depth', {
      scrollPercentage: scrollPercentage
    });
  }

  trackTimeOnPage(pageName) {
    const startTime = Date.now();
    
    return () => {
      const timeOnPage = Date.now() - startTime;
      this.trackEvent('time_on_page', {
        page: pageName,
        timeInSeconds: Math.round(timeOnPage / 1000)
      });
    };
  }

  /**
   * Send analytics data to ops dashboard
   */
  sendBeacon(eventType, data) {
    if (navigator.sendBeacon) {
      const payload = JSON.stringify({
        eventType: eventType,
        data: data,
        sessionId: this.sessionId,
        timestamp: new Date().toISOString()
      });

      navigator.sendBeacon('/api/ops/analytics-beacon', payload);
    }
  }

  /**
   * Send all accumulated data on page unload
   */
  setupBeaconOnUnload() {
    window.addEventListener('beforeunload', () => {
      const summary = {
        sessionId: this.sessionId,
        duration: Date.now(),
        pageViews: this.pageViewData.length,
        events: this.events.length,
        chatMetrics: this.chatMetrics,
        totalEvents: this.events.length
      };

      this.sendBeacon('session_end', summary);
    });
  }

  /**
   * Get session summary
   */
  getSessionSummary() {
    return {
      sessionId: this.sessionId,
      pageViews: this.pageViewData,
      eventsCount: this.events.length,
      chatMetrics: this.chatMetrics,
      totalDuration: Date.now()
    };
  }

  /**
   * Export data for debugging
   */
  exportData() {
    return {
      sessionId: this.sessionId,
      pageViewData: this.pageViewData,
      events: this.events,
      chatMetrics: this.chatMetrics,
      exportedAt: new Date().toISOString()
    };
  }
}

// Initialize global analytics
const analytics = new ClientAnalyticsTracker();

// Add global event tracking
document.addEventListener('click', (e) => {
  const element = e.target.closest('[data-track]');
  if (element) {
    analytics.trackClickEvent(element.id || element.className, element.tagName);
  }
});

// Track scroll depth on scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    analytics.trackScrollDepth();
  }, 1000);
});

// Attach to window for easy access
window.analytics = analytics;
