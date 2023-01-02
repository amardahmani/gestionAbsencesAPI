module.exports = (sequelize, Sequelize) => {
    const Seance = sequelize.define("seances", {
      numero: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      groupe: {
        type: Sequelize.INTEGER
      },
      niveau: {
        type: Sequelize.STRING
      },
      specialite: {
        type: Sequelize.STRING
      },
      matiere: {
        type: Sequelize.STRING
      }
        
    });
    return Seance;
  };