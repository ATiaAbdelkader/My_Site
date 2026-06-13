const { EvalRunner } = require('./runner.js');

console.log('\n=== Building Eval Tests ===');
console.log('EvalRunner initialized with test categories:');

const runner = new EvalRunner();
const categories = [...new Set(runner.tests.map(t => t.category))];

categories.forEach(cat => {
  const count = runner.tests.filter(t => t.category === cat).length;
  console.log(`  ${cat}: ${count} tests`);
});

console.log(`\nTotal: ${runner.tests.length} tests across ${categories.length} categories`);
console.log('Eval build complete.\n');
