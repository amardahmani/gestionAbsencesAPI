const db = require('../models');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const Seance = db.seance;

exports.createSeance = (req,res) => {
    seance.create({
        numero: req.body.numero,
        groupe: req.body.groupe,
        niveau: req.body.niveau,
        specialite: req.body.specialite,
        matiere: req.body.matiere
    }).then(() => {
        res.status(200).send({message: "seance crée avec succées"});
    }).catch((err) => {
        res.status(500).send({message: err.message});
    })
}

exports.getSeances = (req,res) => {
    Seance.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send({message:err.message})
    })
}
