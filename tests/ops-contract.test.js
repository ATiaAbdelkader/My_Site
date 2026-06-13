const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ ${message}`);
  } else {
    failed++;
    console.log(`  ❌ ${message}`);
  }
}

function checkFileExists(filePath) {
  return fs.existsSync(path.join(ROOT, filePath));
}

function checkFileContains(filePath, substring) {
  const p = path.join(ROOT, filePath);
  if (!fs.existsSync(p)) return false;
  return fs.readFileSync(p, 'utf-8').includes(substring);
}

console.log('\n=== OPS Contract Tests ===\n');

// --- Analytics Contract ---
console.log('[Analytics]');
assert(checkFileExists('api/analytics.js'), 'api/analytics.js exists');
assert(checkFileContains('api/analytics.js', 'startTrace'), 'AnalyticsTracker has startTrace method');
assert(checkFileContains('api/analytics.js', 'completeTrace'), 'AnalyticsTracker has completeTrace method');
assert(checkFileContains('api/analytics.js', 'generateReport'), 'AnalyticsTracker has generateReport method');
assert(checkFileContains('api/analytics.js', 'getAllTraces'), 'AnalyticsTracker has getAllTraces method');
assert(checkFileContains('api/analytics.js', 'hashPassword'), 'AnalyticsTracker has hashPassword method');

// --- Analytics Tracker Contract ---
console.log('[Analytics Tracker]');
assert(checkFileExists('assets/js/analytics-tracker.js'), 'analytics-tracker.js exists');
assert(checkFileContains('assets/js/analytics-tracker.js', 'trackPageView'), 'ClientAnalyticsTracker has trackPageView');
assert(checkFileContains('assets/js/analytics-tracker.js', 'trackEvent'), 'ClientAnalyticsTracker has trackEvent');
assert(checkFileContains('assets/js/analytics-tracker.js', 'sendBeacon'), 'ClientAnalyticsTracker has sendBeacon');
assert(checkFileContains('assets/js/analytics-tracker.js', 'trackScrollDepth'), 'ClientAnalyticsTracker has trackScrollDepth');

// --- Beacon Contract ---
console.log('[Beacon]');
assert(checkFileExists('api/ops/analytics-beacon.js'), 'analytics-beacon.js handler exists');
assert(checkFileContains('api/ops/analytics-beacon.js', 'handleBeacon'), 'Beacon handler exports handleBeacon');
assert(checkFileContains('api/ops/analytics-beacon.js', 'localStorage'), 'Beacon handler persists to localStorage');

// --- Chat Contract ---
console.log('[Chat]');
assert(checkFileExists('api/chat.js'), 'api/chat.js exists');
assert(checkFileContains('api/chat.js', 'handleChatMessage'), 'Chat exports handleChatMessage');
assert(checkFileContains('api/chat.js', 'generateMockResponse'), 'Chat exports generateMockResponse');
assert(checkFileContains('api/chat.js', 'detectIntent'), 'Chat has intent detection');
assert(checkFileContains('api/chat.js', 'knowledgeBase'), 'Chat has knowledge base');

// --- Service Worker Contract ---
console.log('[Service Worker]');
assert(checkFileExists('sw.js'), 'sw.js exists');
assert(checkFileContains('sw.js', 'self.addEventListener'), 'sw.js registers event listeners');
assert(checkFileContains('sw.js', 'CACHE_NAME'), 'sw.js defines cache version');

// --- PWA Manifest Contract ---
console.log('[PWA Manifest]');
assert(checkFileExists('manifest.json'), 'manifest.json exists');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf-8'));
assert(!!manifest.name, 'manifest has name');
assert(!!manifest.icons && manifest.icons.length > 0, 'manifest has icons');
assert(manifest.display === 'standalone', 'manifest has standalone display');
assert(manifest.icons.some(i => i.type === 'image/svg+xml'), 'manifest includes SVG icon');

// --- OPS Dashboard Contract ---
console.log('[OPS Dashboard]');
assert(checkFileExists('ops/dashboard.js'), 'ops/dashboard.js exists');
assert(checkFileContains('ops/dashboard.js', 'authenticate'), 'Dashboard has authenticate method');
assert(checkFileContains('ops/dashboard.js', 'showDashboard'), 'Dashboard has showDashboard');
assert(checkFileContains('ops/dashboard.js', 'generateReport'), 'Dashboard displays analytics report');
assert(checkFileContains('ops/dashboard.js', 'isLockedOut'), 'Dashboard has lockout protection');
assert(checkFileContains('ops/dashboard.js', 'maxLoginAttempts'), 'Dashboard has max login attempts config');

// --- Eval Contract ---
console.log('[Evals]');
assert(checkFileExists('evals/runner.js'), 'evals/runner.js exists');
assert(checkFileContains('evals/runner.js', 'EvalRunner'), 'EvalRunner class exists');
assert(checkFileContains('evals/runner.js', 'runTests'), 'EvalRunner has runTests method');
assert(checkFileContains('evals/runner.js', 'generateReport'), 'EvalRunner has generateReport');

// --- SEO Contract ---
console.log('[SEO]');
assert(checkFileExists('sitemap.xml'), 'sitemap.xml exists');
assert(checkFileExists('robots.txt'), 'robots.txt exists');
assert(checkFileContains('index.html', 'og:image'), 'Arabic page has og:image meta');
assert(checkFileContains('index-en.html', 'og:image'), 'English page has og:image meta');

// --- Bilingual Contract ---
console.log('[Bilingual]');
assert(checkFileExists('index.html'), 'Arabic index.html exists');
assert(checkFileExists('index-en.html'), 'English index-en.html exists');
assert(checkFileContains('index.html', 'dir="rtl"'), 'Arabic page has RTL direction');
assert(checkFileContains('index-en.html', 'dir="ltr"'), 'English page has LTR direction');

// --- Newsletter Contract ---
console.log('[Newsletter]');
assert(checkFileContains('assets/js/main-ar.js', 'newsletter_subscriptions'), 'Newsletter persists subscriptions (AR)');
assert(checkFileContains('assets/js/main-en.js', 'newsletter_subscriptions'), 'Newsletter persists subscriptions (EN)');

// --- Blog Contract ---
console.log('[Blog]');
assert(checkFileContains('assets/js/main-ar.js', 'blogArticles'), 'Blog articles data exists (AR)');
assert(checkFileContains('assets/js/main-en.js', 'blogArticles'), 'Blog articles data exists (EN)');
assert(checkFileContains('assets/js/main-ar.js', 'openArticle'), 'openArticle function exists (AR)');
assert(checkFileContains('assets/js/main-en.js', 'openArticle'), 'openArticle function exists (EN)');

// --- Scripts Contract ---
console.log('[Scripts]');
assert(checkFileExists('scripts/validate.js'), 'validate.js exists');
assert(checkFileExists('scripts/generate-sitemap.js'), 'generate-sitemap.js exists');
assert(checkFileExists('scripts/generate-analytics-report.js'), 'generate-analytics-report.js exists');
assert(checkFileExists('scripts/export-ops-data.js'), 'export-ops-data.js exists');

// --- Summary ---
console.log(`\n${'='.repeat(40)}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Total:  ${passed + failed}`);
console.log(`${'='.repeat(40)}\n`);

process.exit(failed > 0 ? 1 : 0);
