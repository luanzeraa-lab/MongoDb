use('Escola');

//indexes
// db.products.insertMany([
//    {item:"abc123" , status:"A", categoria:"clothing"},
//    {item:"xyz123" , status:"A", categoria:"electronics"},
//    {item:"ijk123" , status:"A", categoria:"clothing"},
//    {item:"ijk123" , status:"D", categoria:"clothing"},
// ])

// console.log(
//     db.products.getIndexes()
// )

//criar indice

// db.products.createIndex({item:1},)

//deletar indice
// db.products.dropIndex('item_1');

//colocar nome no indice
// db.products.createIndex({item: 1}, {name: "proc_item"});

//colocar mais de um indice
// db.products.createIndex({status: 1, categoria:1 }, {name: "proc_item", name: "proc_cat"});