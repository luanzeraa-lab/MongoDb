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

//INCREMENTAR VALORES
// db.Alunos.updateOne(
//     {_id: ObjectId('68acef6caf93d324c8eec4ad')},
//     {$inc: {idade: 20}}
// )
// console.log(
//     db.Alunos.find({})
// )
//DECREMENTAR VALORES
// db.Alunos.updateOne(
//     {_id: ObjectId('68acef6caf93d324c8eec4ad')},
//     {$inc: {idade: -1}}
// )
// console.log(
//     db.Alunos.find({})
// )

//COMPARAR OS VALORES CASO O VALOR A SER TROCADO FOR MENOR QUE O ATUAL
// db.Alunos.updateOne(
//     {_id: ObjectId('68acef6caf93d324c8eec4ad')},
//     {$min: {idade: 15}}
// )
// console.log(
//     db.Alunos.find({})
// )

//COMPARAR OS VALORES CASO O VALOR A SER TROCADO FOR MAIOR QUE O ATUAL
// db.Alunos.updateOne(
//     {_id: ObjectId('68acef6caf93d324c8eec4ad')},
//     {$max: {idade: 25}}
// )
// console.log(
//     db.Alunos.find({})
// )

//MULTIPLICA OS VALORES
// db.Alunos.updateOne(
//     {_id: ObjectId('68acef6caf93d324c8eec4ad')},
//     {$mul: {idade: 2}}
// )
// console.log(
//     db.Alunos.find({})
// )

//RENOMEIA UM CAMPO DO BANCO DE DADOS
// db.Alunos.updateMany(
//     {},
//     {$rename: {idade: idadeDaPessoa}}
// )
// console.log(
//     db.Alunos.find({})
// )

db.Alunos.updateMany(
    {},
    {$rename: {idade: idadeDaPessoa}}
)
console.log(
    db.Alunos.find({})
)