use('Escola')

//criar a estruturade coleção

// db.createCollection("Valida", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "Uma estrutura que contém minhas regras",
//             required:["nome", "idade", "sexo"],
//             properties: {
//                 nome: {
//                     bsonType: "string",
//                     description: "Campo obrigatório. Nome"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     description: "Campo obrigatório. Idade",
//                     minimum: 0,
//                     maximum: 120
//                 },
//                 sexo: {
//                     bsonType: "string",
//                     description: "Campo obrigatório. Sexo"
//                 }
//             }
//         }
//     }
// })

//1 exemplo
// db.Valida.insertOne(
//     {
//         nome: "Emerson",
//         idade: Int32("32"),
//         sexo: "M"
//     }
// )

//2 exemplo
// db.Valida.insertOne(
//     {
//         nome: "Emerson",
//         idade: Int32("32")
//     }
// )

//3 exemplo
db.Valida.insertOne(
    {
        nome: "Emerson",
        idade: Int32("32"),
        sexo:"Masc",
        endereco: "jsakjdkacemclw"
    }
)