const fs = require('fs');

// Read the HTML and CSS files
const html = fs.readFileSync('index.html', 'utf-8');
const css = fs.readFileSync('style.css', 'utf-8');

// Create the bundled HTML by injecting the CSS into the HTML file
const bundledHtml = html.replace('</head>', `<style>${css}</style></head>`);

// Write the bundled HTML to a new file
fs.writeFileSync('bundled.html', bundledHtml);

console.log('Bundling complete. Check bundled.html for the result.');
