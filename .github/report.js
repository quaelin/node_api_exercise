const fs = require('fs');

const incoming = fs.readFileSync('./coverage/coverage-summary.json').toString();
const coverage = JSON.parse(incoming);
const linesCoverage = coverage.total.lines.pct;
const badge = `![Static Badge](https://img.shields.io/badge/lines%20coverage-${linesCoverage}-green?color=%2334D058)`;

const readme = fs.readFileSync('./README.md').toString().split('\n');
readme.splice(1, 0, badge);
fs.writeFileSync('./README.md', readme.join('\n'));
