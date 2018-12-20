const { send, json } = require('micro');
const { router, get, post } = require('microrouter');
const request = require('request-promise');


const HL7 = require('./controllers/loader');

// Devuelve 404 si la ruta no existe
const notFound = async (req, res) => send(res, 404, 'No existe la ruta');

// Lee y muestra la configuración de un item "Módulo X, componente Y"
const modulo = async (req, res) => {
    const hl7Module = req.params.modulo;
    const hl7Component = req.params.componente;
    send(res, 200, await Promise.resolve(`Módulo ${hl7Module.toUpperCase()}, componente ${hl7Component}\n`));
};

// Parsea mensaje HL7 v2.4 a formato esperado por servidor PACS
const hl72Pacs = async (req, res) => {

    const hl7Module = req.params.modulo || false;
    const hl7Component = req.params.componente || false;

    let hl7 = await HL7.load(hl7Module, hl7Component);

    if (hl7Module && hl7Component) {

        if (hl7) {

            // Pasamos el body a JSON
            const body = await json(req);

            // Parseamos el JSON usando la config
            const parseado = hl7.parser[`get${hl7Module.toUpperCase()}${hl7Component}`](body, hl7.config);

            // Devolvemos el mensaje
            send(res, 200, await Promise.resolve(parseado.getMessage()));
        } else {
            send(res, 200, await Promise.resolve(`No existe el módulo "${hl7Module.toUpperCase()}${hl7Component}"\n`));
        }
    } else {
        send(res, 200, await Promise.resolve(`Faltan parámetros"`));
    }
}

module.exports = router(
    get('/api/:modulo/:componente', modulo),
    post('/api/:modulo/:componente', hl72Pacs),
    get('/*', notFound)
);
