// const db = require("./app/models");
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost:2707/tccdb",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:true
    })
    .then(() => {
        console.log("conectado ao banco!")
    })
    .catch(err => {
        console.log("Não conseguiu se conectar ao banco!", err);
        process.exit();
    });

    module.exports = mongoose;