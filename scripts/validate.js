const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'index.html', 'index-en.html', '404.html', 'privacy.html', 'terms.html',
  'manifest.json', 'robots.txt', 'sitemap.xml', 'sw.js',
  'assets/css/style.css', 'assets/js/main-ar.js', 'assets/js/main-en.js',
  'api/chat.js', 'api/analytics.js', 'api/rag-search.js'
];

const REQUIRED_DIRS = [
  'assets/css', 'assets/js', 'api', 'evals', 'ops'
];

function validate() {
  const errors = [];
  const warnings = [];
  const root = path.resolve(__dirname, '..');

  console.log('\n=== Abdelkader Atia Website Validator ===\n');

  // Check required directories
  REQUIRED_DIRS.forEach(dir => {
    const dirPath = path.join(root, dir);
    if (!fs.existsSync(dirPath)) {
      errors.push(`Missing directory: ${dir}/`);
    }
  });

  // Check required files
  REQUIRED_FILES.forEach(file => {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
      errors.push(`Missing file: ${file}`);
    }
  });

  // Validate HTML files have proper structure
  ['index.html', 'index-en.html'].forEach(file => {
    const filePath = path.join(root, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (!content.includes('</html>')) {
        errors.push(`${file}: Missing closing </html> tag`);
      }
      if (!content.includes('<script')) {
        warnings.push(`${file}: No script tags found`);
      }
    }
  });

  // Validate manifest.json
  const manifestPath = path.join(root, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      if (!manifest.icons || manifest.icons.length === 0) {
        warnings.push('manifest.json: No icons defined');
      }
    } catch (e) {
      errors.push(`manifest.json: Invalid JSON - ${e.message}`);
    }
  }

  // Check JS files for syntax errors (basic check)
  const jsFiles = ['assets/js/main-ar.js', 'assets/js/main-en.js'];
  jsFiles.forEach(file => {
    const filePath = path.join(root, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;
      if (openBraces !== closeBraces) {
        errors.push(`${file}: Mismatched braces (${openBraces} open vs ${closeBraces} close)`);
      }
    }
  });

  // Check service worker
  const swPath = path.join(root, 'sw.js');
  if (fs.existsSync(swPath)) {
    const sw = fs.readFileSync(swPath, 'utf-8');
    if (!sw.includes('self.addEventListener')) {
      errors.push('sw.js: Missing self.addEventListener');
    }
  }

  // Summary
  console.log(`Files checked: ${REQUIRED_FILES.length + 4}`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log('\n--- ERRORS ---');
    errors.forEach(e => console.log(`  [FAIL] ${e}`));
  }

  if (warnings.length > 0) {
    console.log('\n--- WARNINGS ---');
    warnings.forEach(w => console.log(`  [WARN] ${w}`));
  }

  const success = errors.length === 0;
  console.log(`\n${success ? 'VALIDATION PASSED' : 'VALIDATION FAILED'}\n`);
  process.exit(success ? 0 : 1);
}

validate();
