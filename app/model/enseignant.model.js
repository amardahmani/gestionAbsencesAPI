module.exports = (sequelize, Sequelize) => {
    const Enseignant = sequelize.define("enseignants", {
      matricule: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      specialite: {
        type: Sequelize.STRING
      }
    });
  
    return Enseignant;
  };