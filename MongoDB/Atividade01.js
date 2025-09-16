use ('Atividade01');

//Resposta 2:
//console.log(db.Restaurante.find());

//Resposta 3:
// console.log(db.Restaurante.countDocuments({}));

//Resposta 4:
// console.log(db.Restaurante.find({}, {_id: 0, name:1, borough:1}));

//Resposta 5:
// console.log(db.Restaurante.find({borough: "Bronx"}, {_id: 0, "name":1, "borough":1}));

//Resposta 6:
// console.log(db.Restaurante.find({"grades.score": {$gt: 5}}, {name: 1, grades:{
//     $filter: {
//         input: "$grades",
//         as: "grade",
//         cond: {$gt: ["$$grade.score", 5]}
//     }
// }},
// ))

//Resposta 7:
// console.log(db.Restaurante.find({ cuisine: { $ne: "American " } },{ _id: 0, name:1, cuisine: 1 }));

//Resposta 8:
// console.log( db.Restaurante.find( { name: /Pizza/i }, { _id: 0, name: 1 }));

//Resposta 9:
// console.log(db.Restaurante.find( { name: /Pizza/i, borough: "Brooklyn" },{ _id: 0, name: 1,
//      borought: "Brooklyn" }));

//Resposta 10:
// db.Restaurante.deleteMany({ "grades.score": { $lt: 5 } });

//Resposta 11:
// console.log(db.Restaurante.countDocuments({}));

//Resposta 12:
db.Restaurante.drop();