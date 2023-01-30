const db = require('../model');

const User = db.user;
const Enseignant = db.enseignant;
const Role = db.role;

var bcrypt = require("bcryptjs");

exports.createEnseignant = async (req,res) => {
    
    const user = await User.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    });

    const id = user.id;
    
    const enseignant = await Enseignant.create({
        userId: id,
        matricule: req.body.matricule
    })

    user.setRoles([2]).then(() => {
        res.status(200).send({message: "enseignant crée avec succées"})
    }).catch((e) => {
        res.status(500).send({message: e.message})
    })

};

exports.getEnseignants = (req,res) => {
    User.findAll({
        include: [
            {
                model: Role,
                where: {id:2}
            }, 
            {
                model: Enseignant
            }
        ]
    }).then((data) => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({message: e.error})
    });
}

exports.deleteEnseignant = async (req,res) => {
    const id = req.params.id;

    const enseignant = await Enseignant.destroy({
        where: {
            userId: id
        }    
    })

    User.destroy({
        where:{
            id: id
        }
    }).then(() => {
        res.status(200).send({message: "Enseignant supprimé avec succées"})
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
}