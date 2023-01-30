const db = require('../model');

const User = db.user;
const Etudiant = db.etudiant;
const Role = db.role;
var bcrypt = require("bcryptjs");

exports.createEtudiant = async (req,res) => {
    const user = await User.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    });

    const id = user.id;

    const etudiant = await Etudiant.create({
        matricule: req.body.matricule,
        groupe: req.body.groupe,
        niveau: req.body.niveau,
        specialite: req.body.specialite,
        userId: id
    })

    user.setRoles([3]).then(() => {
        res.status(200).send({message: "etudiant crée avec succées"})
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
}


exports.getEtudiants = (req,res) => {
    User.findAll({
        include: [
            {
                model: Role,
                where: {id:3}
            }, 
            {
                model: Etudiant
            }
        ]
    }).then((data) => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({message: e.error})
    });
}

exports.deleteEtudiant = async (req,res) => {
    const id = req.params.id;

    try{

    const etudiant = await Etudiant.destroy({
        where:{
            userId: id
        }
    })

    User.destroy({where: {
        id: id
    }}).then(() => {
        res.status(200).send("etudiant supprimé")
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
    }
    catch(e){
        res.status(500).send({message: e.message})
    }
}


exports.updateEtudiant = async (req,res) => {
    const id = req.params.id;

    try{
        const etudiant = await Etudiant.update({
            niveau: req.params.niveau,
            specialite: req.params.specialite,
            groupe: req.params.groupe,
            
        },{
            where: {
                userId: id
            }
        })

        User.update({
            nom: req.params.nom,
            prenom: req.params.prenom,
            email: req.params.email,
            password: req.params.password,
        },{
            where: {
                id: id
            }
        }
        ).then(() => {
            res.status(200).send({message: "etudiant modifié"});
        }).catch((err) => {
            res.status(500).send({message: err.message})
        })
    }catch(err){
        res.status(500).send({message: err.message})
    }
}