import fs from 'fs';
const rawConfig = JSON.parse(fs.readFileSync('raw_config.json', 'utf8'));
console.log(Object.keys(rawConfig).join('\n'));
