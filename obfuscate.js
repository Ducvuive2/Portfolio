const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

// Paths
const portfolioPath = path.join(__dirname, 'src', 'Portfolio.js');
const portfolioOutputPath = portfolioPath; // We'll overwrite the same file in production
const devOutputPath = path.join(__dirname, 'src', 'Portfolio.obfuscated.js');

try {
  const code = fs.readFileSync(portfolioPath, 'utf8');

  if (isProduction) {
    // Obfuscate & overwrite the original file
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true
    }).getObfuscatedCode();

    fs.writeFileSync(portfolioOutputPath, obfuscatedCode);
    console.log('Production build: Portfolio.js has been obfuscated and overwritten.');
  } else {
    console.log('Development build: No obfuscation performed.');
  }
} catch (error) {
  console.error('Error during obfuscation:', error);
  process.exit(1);
} 