const fs = require('fs');
const path = require('path');

console.log('PWA Icon Generator');
console.log('------------------');
console.log('SVG icon created at: assets/images/icon.svg');
console.log('');
console.log('To generate PNG icons, use one of these methods:');
console.log('');
console.log('Option 1: Use a browser to open assets/images/icon.svg and screenshot at 192x192 and 512x512');
console.log('');
console.log('Option 2: Install ImageMagick and run:');
console.log('  magick -background none -size 192x192 assets/images/icon.svg assets/images/icon-192.png');
console.log('  magick -background none -size 512x512 assets/images/icon.svg assets/images/icon-512.png');
console.log('');
console.log('Option 3: Install sharp and run this script with:');
console.log('  npm install sharp --save-dev');
console.log('');
console.log('For now, SVG icons are referenced in the manifest for modern browser support.\n');

const root = path.resolve(__dirname, '..');
const svgPath = path.join(root, 'assets', 'images', 'icon.svg');

if (fs.existsSync(svgPath)) {
  console.log(`SVG icon found: ${svgPath}`);
  console.log('Size: ' + fs.statSync(svgPath).size + ' bytes');
} else {
  console.log('SVG icon not found. Run "node scripts/create-icon-svg.js" first.');
}
