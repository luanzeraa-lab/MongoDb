use ('Escola');
// db.getCollectionNames();
// db.Alunos.find({});
// db.inventory.insertMany([
//     {_id: 1, item: {name: "ab", code: "123"}, qty:15, tags: ["A", "B", "C"]},
//     {_id: 2, item: {name: "cd", code: "123"}, qty:20, tags: ["B"]},
//     {_id: 3, item: {name: "ij", code: "456"}, qty:30, tags: ["A", "B"]},
//     {_id: 4, item: {name: "XY", code: "456"}, qty:25, tags: ["B", "A"]},
//     {_id: 5, item: {name: "mn", code: "000"}, qty:20, tags: [["B", "A"], "C"]},
// ])

// operadores lógicos
//$and
// {$and :[{ <expressão1>, ,<expressão2>}}]
// db.inventory.find({
//     $and: [{qty: {$gt: 20}}, {qty: {$lt: 30}}]
// });

// $or: [{ <expressão1>, ,<n...>}}]
// db.inventory.find({
//     $or: [{ qty: {$gt: 20}}, {"item.name": {$eq: "ab"} }]
// })

//$nor - traga os itens que não estão na lista(array)

// db.inventory.find({
//     $nor: [ {qty:{$gt:20}}, {"item.name": {$eq: "ab"} }]
// })

//$not
db.inventory.find({
    qty: {$not: {$gt: 20}}
})
