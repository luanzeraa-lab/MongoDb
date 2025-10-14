use ('Escola')

// console.log("Exibindo todos os documentos da coleção sales")
// console.log(db.sales.find());

// console.log('---------------------------Agregação limit--------------------------------')
//Agregação limit
//traz os 3 primeiros documentos
// console.log(
// db.sales.aggregate([
//     {
//         $limit: 3
//     },
//     {$project: {_id: 0, item: 1, price:1}}
// ])
// )

// console.log(
// db.sales.aggregate([
//     {$project: {_id: 0, item: 1, price: 1, quantity: 1}},
//     {$sort: {quantity: 1}},
//     {$limit: 3}
// ])
// )

// console.log(
//     db.sales.aggregate([
//     {$match: {item: "abc"}}
//     ])
// )

console.log(
    db.sales.aggregate([
    {$addFields:
        {Total: {$multiply: ["$price", "$quantity"]}}}
    ])
)

