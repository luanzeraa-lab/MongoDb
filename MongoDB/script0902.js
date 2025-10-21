use('Escola')

// db.createCollection("Funcionario", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             additionalProperties: false,
//             title: "Funcionario talvez dependente",
//             required: ["_id", "nome", "endereco", "salario", "cargo", "dependente"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId"
//                 },
//                 nome: {
//                     bsonType: "string"
//                 },
//                 endereco: {
//                     bsonType: "object",
//                     required: ["cep", "rua", "numero", "complemento", "bairro", "cidade", "uf"],
//                     properties: {
//                         cep: {
//                             bsonType: "string"
//                         },
//                         rua: {
//                             bsonType: "string"
//                         },
//                         numero: {
//                             bsonType: "string"
//                         },
//                         complemento: {
//                             bsonType: "string"
//                         },
//                         bairro: {
//                             bsonType: "string"
//                         },
//                         cidade: {
//                             bsonType: "string"
//                         },
//                         uf: {
//                             bsonType: "string",
//                             enum: ["RJ", "SP", "MG", "AC"]
//                         }
//                     }
//                 },
//                 salario: {
//                     bsonType: "double"
//                 },
//                 cargo: {
//                     bsonType: "string"
//                 },
//                 dependente: {
//                     bsonType: "object"
//                 }
                
//             }
//         }
//     }
// })

db.Funcionario.insertOne({
    nome: "Zé",
    endereco: {
        cep: "x",
        rua: "x",
        numero: "123",
        complemento: "",
        bairro: "x",
        cidade: "x",
        uf: "AC"
    },
    salario: 123.100,
    dependente: {},
    cargo: "dev"
})