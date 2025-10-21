use('Escola')

// db.createCollection("Usuario" ,{
//     validator:{
//         $jsonSchema: {
//             bsonType: "object",
//             title: "Valida campos de usuários",
//             additionalProperties: false,
//             required: ["_id", "nome", "idade", "sexo"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId",
//                     description: "Campo Obrigatório"
//                 },
//                 nome: {
//                     bsonType: "string",
//                 },
//                 sexo:{
//                     bsonType: "string",
//                     enum: ["M", "F"],
//                     description: "Somente M ou F"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     minimum: 0,
//                     maximum: 120,
//                     pattern: "^\\d{2}$"
//                 }
//             }
//         }
//     }
// })

// db.Usuario.insertOne(
//     {
//         nome: "teste",
//         idade: Int32("40"),
//         sexo: "M",
//         endereco: "ajsidhaofsa"
//     }
// )

// db.Usuario.insertOne(
//     {
//         nome: "teste",
//         idade: Int32("40"),
//         sexo: "M"
//     }
// )
db.Usuario.insertOne(
    {
        nome: "teste",
        idade: Int32("40"),
        sexo: "Masculino"
    }
)