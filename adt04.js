import * as parser from '@rimiti/object-hl7-parser';
// const parser = require('@rimiti/object-hl7-parser');
// const a04Config = require('./node_modules/@rimiti/object-hl7-parser/src/config/default-hl7/adt/a04-config.json');
// const a04Config = require('./mapping/adt-04.json');
import * as a04Config from '@rimiti/object-hl7-parser/src/config/default-hl7/adt/a04-config.json';

const message_to_encode = {
    "message_datetime": "20160923155836",
    "event": {
        "recorded_datetime": "20160923155836"
    },
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

const getADT04 = parser.getADT04(message_to_encode, a04Config)

// If you want a stringified output
console.log(getADT04.getMessage())

// If you want an object output
// console.log(getADT04.getObject())