const db = require('../model');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const Matiere = db.matiere;


exports.createMatiere = (req,res) => {
    Matiere.create({
        code_module: req.body.code_module,
        coef: req.body.coef,
        description: req.body.description,
    }).then(() => {
        res.status(200).send({message: "module ajouté avec succées"})
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
}


exports.getMatieres = (req,res) => {
    Matiere.findAll().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send(err.message)
    })
}

exports.deleteMatiere =(req,res) => {
    const code_module = req.params.code_module;

    Matiere.destroy({
        where: {
            code_module: code_module
        }
    }).then(() => {
        res.status(200).send({message: "module supprimé avec succées"})
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
}

exports.updateMatiere = (req,res) => {
    const code_module = req.params.code_module;

    Matiere.update({
        code_module: req.body.code_module,
        coef: req.body.coef,
        description: req.body.description,
        },{
        where:{
            code_module: code_module
        }
    }).then(() => {
        res.status(200).send({message: "module modifié avec succées"})
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
}