module.exports = app => {
    const vacinas = require("../controllers/vacina.controller");

    var router = require("express").Router();

    router.post("/", vacinas.create);

    router.get("/", vacinas.findAll);

    app.use('/api/vacinas', router);
};