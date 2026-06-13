function handleBeacon(req) {
  try {
    const data = typeof req === 'string' ? JSON.parse(req) : req;
    const { eventType, data: eventData, sessionId, timestamp } = data;

    const beaconLog = {
      eventType,
      sessionId,
      timestamp: timestamp || new Date().toISOString(),
      data: eventData,
      receivedAt: new Date().toISOString()
    };

    // Store in localStorage for the dashboard
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('ops_beacon_log') || '[]');
      stored.push(beaconLog);
      localStorage.setItem('ops_beacon_log', JSON.stringify(stored.slice(-500))); // Keep last 500
    }

    return { status: 200, message: 'Beacon received' };
  } catch (error) {
    console.error('Beacon handler error:', error);
    return { status: 500, error: 'Failed to process beacon' };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { handleBeacon };
}
