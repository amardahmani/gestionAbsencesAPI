module.exports = (sequelize, Sequelize) => {
    const Absence = sequelize.define("absences", {
      numero_absence: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      dateAbsence: {
        type: Sequelize.DATE
      },
      seance: {
        type: Sequelize.INTEGER
      },
      
    });
    return Absence;
  };