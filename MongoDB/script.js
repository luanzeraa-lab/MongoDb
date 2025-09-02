// //CRIAR UM BANCO NO MONGO
use ("Escola");

// //CRIAR UMA COLEÇÃO
 db.createCollection("Alunos");

// db.Alunos.insertMany([
//     {"nome": "Ricardo", "idade":30, "email": "ricardo@x.com"},
//     {"nome": "Jose", "idade":24, "email": "jose@x.com"},
//     {"nome": "Maria", "idade":56, "email": "maria@x.com"},
//     {"nome": "Sofia", "idade":20, "email": "sofia@x.com"},
//     {"nome": "Isaac", "idade":10}
// ]);

//EXIBIR TODOS OS DOCUMENTOS(Registro);
// console.log("------------ ----------");
// console.log(db.Alunos.find({}));

//EXIBIR COLUNAS
// console.log("------------ ----------");
//  console.log(db.Alunos.find({}, {_id:0, nome:1, idade:1}));

//  //EXIBIR POR FILTRO

//  console.log("---FIND-- FILTRO");
//  console.log(db.Alunos.find({"nome":"Ricardo"}, {"_id":0, "nome":1, "idade":1}));

 //SABER QUANTOS REGISTROS HÁ NA COLEÇÃO

 console.log('--------- Total de registro------')

console.log(db.Alunos.countDocuments({}));

// EXCLUIR UM DOCUMENTO

console.log("--------excluir documento-------")

// console.log(db.Alunos.deleteOne({_id: ObjectId('68acef6caf93d324c8eec4a9')}))
console.log(db.Alunos.findOne({_id: ObjectId('68acef6caf93d324c8eec4a9')}))