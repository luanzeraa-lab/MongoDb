use ('Escola');

// mostra os campos
console.log(db.Alunos.find({}));

//Alterar
// db.Alunos.updateOne(
//     {_id:  ObjectId('68acef6caf93d324c8eec4ab')},
//     {
//         $set: {
//             idade: 20
//         }
//     })

// db.Alunos.updateMany(
//     {nome: "Maria"},
//     {
//         $set: {
//             idade: 10
//         }
//     }
// )

// db.Alunos.updateOne(
//     {_id:  ObjectId('68acef6caf93d324c8eec4ab')},
//     {
//         $set: {
//             idade: 35,
//             email: "alteradoEmail@gmail.com",
//             sexo: "F",
//             data: new Date(),
//             preco: 99.99
//         }
//     },
//     {upsert: true}
// )

// retirar uma chave-valor

// db.Alunos.updateOne(
//     {_id:  ObjectId('68acef6caf93d324c8eec4ab')},
//     {$unset: {
//         sexo: ""
//     }}
// )
