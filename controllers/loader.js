const fs = require('fs');
const path = require('path');

let load = (moduleName, compName) => {
    return new Promise((resolve, reject) => {
        if (moduleName && compName) {
            if (!fs.existsSync(path.join(__dirname, `../${moduleName}${compName}.js`))) {
                return resolve(false);
            } else {
                return resolve(require(`../${moduleName}${compName}`));
            }
        }
    });
}

module.exports = { load };