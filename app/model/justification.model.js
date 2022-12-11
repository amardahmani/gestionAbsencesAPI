module.exports = (sequelize, Sequelize) => {
    const Justification = sequelize.define("justifications", {
      numero_justification: {
        type: Sequelize.INTEGER,
        primatyKey: true
      },
      justificatif: {
        type: Sequelize.STRING
      },
      date_justification: {
        type: Sequelize.DATE
      }
    });
    return Justification;
};