const { request } = require('express');
const db = require('../models');

const Enseignement = db.enseignement;

exports.affectSeance = (req,res) => {
    Enseignement.create({
        enseignant: request.id,
        seance: request.numeroSeance
    })
}
