// use ('Escola');
// //db.createCollection('Cursos')
// db.Cursos.insertMany([
//     {
//         nome: "Emerson Rocha", idade:30, curso:"mongodb", matricula: "12346689",
//         endereco: {
//             cep: 111111111, rua: "Rua A", numero: 12, complemento: "",
//             cidade:"São Paulo", estado: "SP"
//         },
//         telefone:[11222222222, 11333333333]
//     },
//     {
//         nome: "Maria Silva", idade:25, curso:"Data Science", matricula: "987645321",
//         endereco: {
//             cep: 22222222, rua: "Rua B", numero: 12, complemento: "",
//             cidade:"Rio de Janeiro", estado: "RJ"
//         },
//         telefone:[11444444444, 11555555555]
//     }
// ])
// console.log(db.Cursos.find({"endereco.cep": {$eq:111111111}},
//     {"_id":0, "nome":1, "endereco.rua": 1, "endereco.cep": 1, "telefone.1":1}));
    
    // console.log(db.Cursos.find({"telefone.0": {$eq:11444444444}}, {"nome":1}));

    //DELETE DOCUMENTO
  db.Cursos.deleteOne({nome: {$eq:"Maria Silva"}});
    // db.Curso.deleteMany({nome:{$eq: "Maria"}});

   



    git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/luanzeraa-lab/MongoDb.git
git push -u origin main