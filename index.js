const { send, json } = require('micro');
const { router, get, post } = require('microrouter');
const fs = require('fs');
const path = require('path');

const modulo = async (req, res) => {
    const hl7Module = req.params.modulo;
    const hl7Component = req.params.componente;
    send(res, 200, await Promise.resolve(`Módulo ${hl7Module.toUpperCase()}, componente ${hl7Component}\n`))
};

const notFound = async (req, res) => send(res, 404, 'No existe la ruta');
const hl7Data = async (req, res) => {

    const hl7Module = req.params.modulo;
    const hl7Component = req.params.componente;
    const body = await json(req);

    if (hl7Module && hl7Component) {
        if (fs.existsSync(path.join(__dirname, `${hl7Module}${hl7Component}.js`))) {
            const { parser, config } = require(`./${hl7Module}${hl7Component}`);
            const parseado = parser[`get${hl7Module.toUpperCase()}${hl7Component}`](body, config);
            send(res, 200, parseado.getMessage());
        } else {
            send(res, 200, `No existe el archivo "${hl7Module}${hl7Component}.js"`);
        }
    }
}

module.exports = router(
    // get('/api/:modulo/:componente', modulo),
    post('/api/:modulo/:componente', hl7Data),
    get('/*', notFound)
);
