const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '..', 'ops', 'data');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function loadAnalyticsData() {
  const analyticsPath = path.join(DATA_DIR, 'analytics-log.json');
  if (fs.existsSync(analyticsPath)) {
    return JSON.parse(fs.readFileSync(analyticsPath, 'utf-8'));
  }
  return { sessions: [], events: [], conversations: [], generatedAt: null };
}

function generateReport() {
  ensureDataDir();
  const data = loadAnalyticsData();
  const now = new Date().toISOString();

  const report = {
    generatedAt: now,
    reportPeriod: {
      start: data.generatedAt || now,
      end: now,
    },
    summary: {
      totalSessions: data.sessions.length,
      totalEvents: data.events.length,
      totalConversations: data.conversations.length,
      uniqueVisitors: new Set(data.sessions.map(s => s.sessionId)).size,
    },
    conversations: {
      total: data.conversations.length,
      totalMessages: data.conversations.reduce((sum, c) => sum + (c.messages || 0), 0),
      totalCost: data.conversations.reduce((sum, c) => sum + (c.cost || 0), 0),
      averageMessagesPerConversation: data.conversations.length > 0
        ? (data.conversations.reduce((sum, c) => sum + (c.messages || 0), 0) / data.conversations.length).toFixed(2)
        : 0,
    },
    topEvents: Object.entries(
      data.events.reduce((acc, e) => {
        acc[e.name] = (acc[e.name] || 0) + 1;
        return acc;
      }, {})
    ).sort((a, b) => b[1] - a[1]).slice(0, 10),
    recentSessions: data.sessions.slice(-10).map(s => ({
      date: s.timestamp,
      page: s.page,
      language: s.language,
    })),
  };

  const reportPath = path.join(DATA_DIR, 'analytics-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`Analytics report generated: ${reportPath}`);
  console.log(`  Sessions: ${report.summary.totalSessions}`);
  console.log(`  Events: ${report.summary.totalEvents}`);
  console.log(`  Conversations: ${report.summary.totalConversations}`);
}

generateReport();
