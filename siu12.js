const parser = require('@rimiti/object-hl7-parser');
const s12Config = require('@rimiti/object-hl7-parser/src/config/default-hl7/siu/s12-config.json');

module.exports = { parser: parser, config: s12Config };

// const message_to_encode = {
//     "message_datetime": "20160923155836",
//     "event": {
//         "recorded_datetime": "20160923155836"
//     },
//     "fiche": {
//         "id": "123456",
//         "firstname": "DO BAIRRO",
//         "lastname": "Dimitri",
//         "date_of_birth": "19920506",
//         "sex": "M",
//         "patient_alias": "Nom usuel",
//         "address": {
//             "street": "Avenue des Champs-Élysées",
//             "city": "Paris",
//             "zipcode": "75000"
//         },
//         "contacts": [{
//             "number": "0100000000",
//             "email": "dimitri.dobairro@dimsolution.com"
//         }, {
//             "number": "0200000000"
//         }]
//     },
//     "appointment": {
//         "filler_id": "49849903800^DimSolution",
//         "event_reason": "100",
//         "timing": {
//             "date": "20161231110000",
//             "duration": "30"
//         },
//         "filler": {
//             "contacts": {
//                 "id": "10101041431",
//                 "firstname": "KAYSSIEH",
//                 "lastname": "BASSEL"
//             }
//         },
//         "entred_by": {
//             "name": "ODS"
//         }
//     },
//     "general_ressource": {
//         "set_id": "1",
//         "ressource_type": "10101041431@750057689"
//     },
//     "ressource_group": {
//         "set_id": "1"
//     },

//     "comments": {
//         "set_id": "",
//         "source": "",
//         "comment": "Mon commentaire",
//         "comment_type": ""
//     }
// }