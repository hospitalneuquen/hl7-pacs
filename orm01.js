const parser = require('@rimiti/object-hl7-parser');

const o01Config = require('@rimiti/object-hl7-parser/src/config/default-hl7/orm/o01-config.json');

const message_to_encode = {
    "message_datetime": "20160923155836",
    "event": {
        "recorded_datetime": "20160923155836"
    },
    "_id": "5c09343081f7280e2ea26cdf",
    "paciente": {
        "_id": "586e6e8927d3107fde123264",
        "nombre": "RAFAEL",
        "apellido": "COSTICH",
        "documento": "21785400",
        "sexo": "M",
        "fechaNacimiento": "19700420",
        "address": {
            "street": "Avenue des Champs-Élysées",
            "city": "Paris",
            "zipcode": "75000"
        },
        "contacts": [{
            "number": "0100000000",
            "email": "dimitri.dobairro@dimsolution.com"
        }, {
            "number": "0200000000"
        }]
    },
    "solicitud": {
        "tipoPrestacion": {
            "refsetIds": [],
            "conceptId": "268565007",
            "term": "Exámen médico del adulto",
            "fsn": "examen médico del adulto (procedimiento)",
            "semanticTag": "procedimiento",
            "id": "5951051aa784f4e1a8e2afe1",
        },
        "tipoPrestacionOrigen": {
            "refsetIds": []
        },
        "organizacion": {
            "id": "57e9670e52df311059bc8964",
            "nombre": "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON"
        },
        "profesional": {
            "id": "5b06b22d623c22d1ac72c38a",
            "nombre": "PABLO",
            "apellido": "SILVEIRA",
            "documento": "34662087"
        },
        "ambitoOrigen": "ambulatorio",
        "fecha": "2018-12-05T14:06:35.315-03:00",
        "registros": []
    },
    "appointment": {
        "filler_id": "49849903800^DimSolution",
        "event_reason": "100",
        "timing": {
            "date": "20161231110000",
            "duration": "30"
        },
        "filler": {
            "contacts": {
                "id": "10101041431",
                "firstname": "KAYSSIEH",
                "lastname": "BASSEL"
            }
        },
        "entred_by": {
            "name": "ODS"
        }
    },
    "general_ressource": {
        "set_id": "1",
        "ressource_type": "10101041431@750057689"
    },
    "ressource_group": {
        "set_id": "1"
    },

    "comments": {
        "set_id": "",
        "source": "",
        "comment": "Mon commentaire",
        "comment_type": ""
    }
}


const prestacion = {}

const getORM01 = parser.getORM01(message_to_encode, o01Config)

// If you want a stringified output
console.log(getORM01.getMessage())

// If you want an object output
// console.log(getADT04.getObject())