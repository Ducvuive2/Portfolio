const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

// Path to the source file
const portfolioPath = path.join(__dirname, 'src', 'Portfolio.js');

if (process.env.NODE_ENV === 'production') {
  try {
    const code = fs.readFileSync(portfolioPath, 'utf8');
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true
    }).getObfuscatedCode();

    // Prepend ESLint disable comment
    const output = '/* eslint-disable */\n' + obfuscatedCode;

    // Overwrite Portfolio.js with the obfuscated version
    fs.writeFileSync(portfolioPath, output);
    console.log('Portfolio.js has been obfuscated in place.');
  } catch (error) {
    console.error('Error during obfuscation:', error);
    process.exit(1);
  }
} else {
  console.log('Skipping obfuscation in development.');
}
