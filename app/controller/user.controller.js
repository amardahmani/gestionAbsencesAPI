const { Sequelize } = require("../models");
const db = require("../models");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("admin Content.");
};

exports.chefDepartementBoard = (req, res) => {
  res.status(200).send("chef département Content.");
};

exports.enseignantBoard= (req, res) => {
  res.status(200).send("enseignant Content.");
};

exports.etudiantBoard = (req,res) => {
  res.status(200).send("etudiant content");
};

exports.listeEnseignants = (req,res) => {
  User.findAll({
    include: [
      {
        model:Role,
        where: {id:3}
      }
    ]
    
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message | "there was an error while retrieving enseignant"
    });
  }); 
}
