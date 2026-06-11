class AnalyticsTracker {
  constructor() {
    this.traces = [];
    this.sessions = {};
    this.conversationMetrics = {};
  }

  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'atia_ops_salt_2024');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  verifyPassword(input, storedHash) {
    return this.hashPassword(input).then(hash => hash === storedHash);
  }

  getStoredPasswordHash() {
    const stored = localStorage.getItem('ops_password_hash');
    if (stored) return stored;
    return 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b';
  }

  startTrace(traceId, metadata = {}) {
    const trace = {
      id: traceId,
      startTime: Date.now(),
      startDate: new Date().toISOString(),
      metadata: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        language: document.documentElement.lang || 'en',
        ...metadata
      },
      spans: [],
      observations: [],
      status: 'active'
    };
    this.traces.push(trace);
    return trace;
  }

  addSpan(traceId, spanData) {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    const span = {
      id: `span_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: spanData.name,
      startTime: Date.now(),
      startDate: new Date().toISOString(),
      duration: 0,
      input: spanData.input,
      output: spanData.output,
      metadata: spanData.metadata || {},
      cost: spanData.cost || 0
    };
    trace.spans.push(span);
    return span;
  }

  completeSpan(traceId, spanId, output, cost = 0) {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    const span = trace.spans.find(s => s.id === spanId);
    if (!span) return null;
    span.duration = Date.now() - span.startTime;
    span.output = output;
    span.cost = cost;
    return span;
  }

  recordMessage(traceId, role, content, cost = 0) {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    const observation = {
      id: `obs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      role: role,
      content: content,
      timestamp: new Date().toISOString(),
      cost: cost,
      tokens: Math.ceil(content.length / 4)
    };
    trace.observations.push(observation);
    this.updateConversationMetrics(traceId, observation);
    return observation;
  }

  updateConversationMetrics(traceId, observation) {
    if (!this.conversationMetrics[traceId]) {
      this.conversationMetrics[traceId] = {
        messageCount: 0,
        totalCost: 0,
        totalTokens: 0,
        averageResponseTime: 0,
        quality: null
      };
    }
    const metrics = this.conversationMetrics[traceId];
    metrics.messageCount += 1;
    metrics.totalCost += observation.cost;
    metrics.totalTokens += observation.tokens;
  }

  scoreResponse(traceId, score, category = 'general') {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    trace.quality = {
      score: score,
      category: category,
      timestamp: new Date().toISOString()
    };
    return trace.quality;
  }

  completeTrace(traceId, status = 'success') {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    trace.endTime = Date.now();
    trace.endDate = new Date().toISOString();
    trace.duration = trace.endTime - trace.startTime;
    trace.status = status;
    this.persistTrace(trace);
    return trace;
  }

  persistTrace(trace) {
    try {
      const stored = JSON.parse(localStorage.getItem('ops_traces') || '[]');
      stored.push(trace);
      localStorage.setItem('ops_traces', JSON.stringify(stored.slice(-100)));
    } catch (e) {
      console.warn('Failed to persist trace:', e);
    }
  }

  loadPersistedTraces() {
    try {
      return JSON.parse(localStorage.getItem('ops_traces') || '[]');
    } catch { return []; }
  }

  getTraceSummary(traceId) {
    const trace = this.traces.find(t => t.id === traceId);
    if (!trace) return null;
    const metrics = this.conversationMetrics[traceId] || {};
    return {
      id: trace.id,
      duration: trace.duration,
      status: trace.status,
      messageCount: metrics.messageCount || trace.observations.length,
      totalCost: metrics.totalCost || 0,
      totalTokens: metrics.totalTokens || 0,
      spanCount: trace.spans.length,
      quality: trace.quality,
      startDate: trace.startDate,
      endDate: trace.endDate
    };
  }

  getAllTraces(filters = {}) {
    let allTraces = [...this.traces, ...this.loadPersistedTraces()];
    if (filters.status) allTraces = allTraces.filter(t => t.status === filters.status);
    if (filters.limit) allTraces = allTraces.slice(-filters.limit);
    const seen = new Set();
    return allTraces.filter(t => {
      if (seen.has(t.id)) return false;
      seen.add(t.id);
      return true;
    }).map(trace => this.getTraceSummary(trace.id));
  }

  generateReport(timeRange = null) {
    const traces = this.getAllTraces();
    const completedTraces = traces.filter(t => t.status === 'success' || t.status === 'complete');
    return {
      totalConversations: traces.length,
      completedConversations: completedTraces.length,
      totalMessages: completedTraces.reduce((sum, t) => sum + (t.messageCount || 0), 0),
      totalCost: completedTraces.reduce((sum, t) => sum + (t.totalCost || 0), 0),
      totalTokens: completedTraces.reduce((sum, t) => sum + (t.totalTokens || 0), 0),
      averageConversationDuration: completedTraces.length > 0
        ? completedTraces.reduce((sum, t) => sum + (t.duration || 0), 0) / completedTraces.length
        : 0,
      averageMessagesPerConversation: completedTraces.length > 0
        ? completedTraces.reduce((sum, t) => sum + (t.messageCount || 0), 0) / completedTraces.length
        : 0,
      generatedAt: new Date().toISOString()
    };
  }
}

const analyticsTracker = new AnalyticsTracker();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AnalyticsTracker, analyticsTracker };
}
