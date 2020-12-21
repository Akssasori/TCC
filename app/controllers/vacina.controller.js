const db = require("../models");
const Vacina = db.vacinas;

exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({message: "não pode ser vazio!"});
        return;
    }
    const vacina = new Vacina({

        nomePaciente: req.body.nomePaciente,
        nomeVacina: req.body.nomeVacina,
        numeroDose: req.body.numeroDose,
        data: req.body.data,
        lote: req.body.lote,
        local: req.body.local

    });

    vacina
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo deu erro ao criar o registro"
            });
        });

};

exports.findAll = (req,res) => {
    const nomePaciente = req.query.nomePaciente;
    var condition = nomePaciente ? { nomePaciente: { $regex: new RegExp(title), $options: "i"}}: {};

    Vacina.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algum erro ocorreu"
        });
    });

};