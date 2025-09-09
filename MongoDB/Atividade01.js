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
console.log(db.Restaurante.find({"grades.score": {$gt: 5}}, {name: 1, grades:{
    $filter: {
        input: "$grades",
        as: "grade",
        cond: {$gt: ["$$grade.score", 5]}
    }
}},
))