// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: ['env']
});

const fs = require('fs');
const path = require('path');

let hl7Module = process.argv[2];
let hl7Component = process.argv[3];

if (hl7Module && hl7Component) {
    if (fs.existsSync(path.join(__dirname, `${hl7Module}${hl7Component}.js`))) {
        // Import the rest of our application.
        module.exports = require(`./${hl7Module}${hl7Component}`);
    } else {
        console.log(`No existe el archivo "${hl7Module}${hl7Component}.js"`);
    }
}
