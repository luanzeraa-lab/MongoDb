// BANCO
use ("Escola");

// EXIBIR TODOS
// console.log(db.Alunos.find());

// console.log('---------- $eq ------------')

//sem comparação
//db.Alunos.find({"idade": 20})

// COMPARAÇÃO
// $eq -> Igual a

// console.log(db.Alunos.find({"idade":{"$eq" : 20} }, {"nome": 1}));

//$gt -> Maior que
// console.log("------------$gt-------------");
// console.log(db.Alunos.find({"idade": {$gt:20}}));

//$gte -> Maior ou igual
// console.log(db.Alunos.find({"idade": {$gte : 30}}, {"_id":0, "nome":1, "idade":1}))

// $lt -> Menor que
// console.log("--------$lt--------");
// console.log(db.Alunos.find({"idade":{$lt: 30}}, {"_id":0, "nome":1, "idade":1}))

// $lte -> Menor ou igual
// console.log("--------$lte--------");
// console.log(db.Alunos.find({"idade":{$lte: 24}}, {"_id":0, "nome":1, "idade":1}))

//$in -> corresponde o que está dentro da matriz
// console.log("--------$in--------");
// console.log(db.Alunos.find({"idade": {$in:[10, 20, 30]}}));

//$ne -> corresponde os valores que não são iguais
// console.log("--------$ne--------");
// console.log(db.Alunos.find({"idade": {$ne:10}}));

//$nin -> valores que estão na matriz não seja igual específico
console.log("--------$nin--------");
console.log(db.Alunos.find({"idade": {$nin:[10, 24, 30]}}));
