const fs = require('fs');

const file = fs.readFileSync('./netlify.toml');
fs.writeFileSync('./dist/timurkalimullin-angular2022-q3/netlify.toml', file)
