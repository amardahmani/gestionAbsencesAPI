module.exports = (sequelize, Sequelize) => {
    const Etudiant = sequelize.define("etudiants", {
        matricule: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      
      groupe: {
        type: Sequelize.INTEGER
      },
      niveau: {
        type: Sequelize.STRING
      },
      specialite: {
        type: Sequelize.STRING
      }

    });
  
    return Etudiant;
  };