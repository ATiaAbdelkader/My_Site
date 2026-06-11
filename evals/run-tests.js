const { EvalRunner } = require('./runner.js');
const { generateMockResponse } = require('../api/chat.js');

const TEST_QUERIES = [
  'Tell me about your PhD research',
  'What training programs do you offer?',
  'Can you help with data analysis?',
  'Tell me about kamel3lom platform',
  'What projects have you worked on?',
  'How can I contact you?',
  'What is your background?',
  'Do you offer consulting services?',
  'Tell me about the FBS program',
  'How can I publish my research?',
];

async function runAllEvals() {
  console.log('\n=== Running Eval Tests ===\n');

  const runner = new EvalRunner();
  const allResults = [];
  let totalPassed = 0;
  let totalFailed = 0;

  for (const query of TEST_QUERIES) {
    console.log(`Query: "${query}"`);
    const response = generateMockResponse(query, {});
    console.log(`  Response: ${response.substring(0, 80)}...`);

    const report = await runner.runTests(response);
    allResults.push({ query, report });

    totalPassed += report.passedTests;
    totalFailed += report.failedTests;

    console.log(`  Passed: ${report.passedTests}/${report.totalTests} (${report.passRate}%)`);
    console.log('');
  }

  const avgPassRate = allResults.reduce((sum, r) => sum + parseFloat(r.report.passRate), 0) / allResults.length;

  console.log('='.repeat(50));
  console.log('FINAL EVAL RESULTS');
  console.log('='.repeat(50));
  console.log(`Total queries tested: ${TEST_QUERIES.length}`);
  console.log(`Total tests run: ${totalPassed + totalFailed}`);
  console.log(`Total passed: ${totalPassed}`);
  console.log(`Total failed: ${totalFailed}`);
  console.log(`Average pass rate: ${avgPassRate.toFixed(1)}%`);

  // Category breakdown
  const catStats = {};
  allResults.forEach(r => {
    Object.entries(r.report.byCategory).forEach(([cat, stats]) => {
      if (!catStats[cat]) catStats[cat] = { passed: 0, total: 0 };
      catStats[cat].passed += stats.passed;
      catStats[cat].total += stats.total;
    });
  });

  console.log('\nCategory Breakdown:');
  Object.entries(catStats).forEach(([cat, stats]) => {
    const rate = ((stats.passed / stats.total) * 100).toFixed(1);
    console.log(`  ${cat}: ${stats.passed}/${stats.total} (${rate}%)`);
  });

  const overallPassed = allResults.reduce((sum, r) => sum + r.report.passedTests, 0);
  const overallTotal = allResults.reduce((sum, r) => sum + r.report.totalTests, 0);
  console.log(`\nOverall: ${overallPassed}/${overallTotal} (${((overallPassed / overallTotal) * 100).toFixed(1)}%)`);

  const exitCode = totalFailed > 0 ? 1 : 0;
  process.exit(exitCode);
}

runAllEvals().catch(err => {
  console.error('Eval run failed:', err);
  process.exit(1);
});
