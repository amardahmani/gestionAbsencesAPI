module.exports = (sequelize, Sequelize) => {
    const Absence = sequelize.define("absences", {
      numero_absence: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      
      dateAbsence: {
        type: Sequelize.DATE
      },
      
    });
    return Absence;
  };