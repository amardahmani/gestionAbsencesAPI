module.exports = (sequelize, Sequelize) => {
    const Matiere = sequelize.define("matieres", {
      code: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING
      },
      coeif: {
        type: Sequelize.INTEGER
      }
    });
  
    return Matiere;
  };