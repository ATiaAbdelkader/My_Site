const fs = require('fs');
const path = require('path');

const DATA_DIR = path.resolve(__dirname, '..', 'ops', 'data');
const EXPORT_DIR = path.resolve(__dirname, '..', 'ops', 'exports');

function ensureExportDir() {
  if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
  }
}

function loadDataFiles() {
  const data = {};
  if (fs.existsSync(DATA_DIR)) {
    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
    files.forEach(file => {
      const filePath = path.join(DATA_DIR, file);
      data[file] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    });
  }
  return data;
}

function exportCSV(data, name) {
  if (!data || data.length === 0) return;

  const keys = Object.keys(data[0]);
  const headers = keys.join(',');
  const rows = data.map(item =>
    keys.map(k => {
      const val = item[k];
      if (typeof val === 'object') return `"${JSON.stringify(val)}"`;
      return `"${String(val).replace(/"/g, '""')}"`;
    }).join(',')
  );

  const csv = [headers, ...rows].join('\n');
  const exportPath = path.join(EXPORT_DIR, `${name}.csv`);
  fs.writeFileSync(exportPath, csv, 'utf-8');
  console.log(`  CSV: ${exportPath}`);
}

function exportJSON(data, name) {
  const exportPath = path.join(EXPORT_DIR, `${name}.json`);
  fs.writeFileSync(exportPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  JSON: ${exportPath}`);
}

function exportData() {
  ensureExportDir();
  const data = loadDataFiles();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

  console.log(`\nExporting ops data (${timestamp})...`);

  Object.entries(data).forEach(([filename, content]) => {
    const baseName = filename.replace('.json', '') + '-' + timestamp;

    if (Array.isArray(content)) {
      exportCSV(content, baseName);
    }
    exportJSON(content, baseName);
  });

  const summary = {
    exportedAt: timestamp,
    filesProcessed: Object.keys(data).length,
    exportLocation: EXPORT_DIR,
  };

  const summaryPath = path.join(EXPORT_DIR, `export-summary-${timestamp}.json`);
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');
  console.log(`  Summary: ${summaryPath}`);

  if (Object.keys(data).length === 0) {
    console.log('  (No data files found to export)');
  }

  console.log('Export complete.\n');
}

exportData();
