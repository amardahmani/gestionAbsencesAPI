module.exports = (sequelize, Sequelize) => {
    const Enseignement = sequelize.define("enseignements", {
        seance: {
            type: Sequelize.INTEGER
        },
        enseignant: {
            type: Sequelize.INTEGER
        }
    });
    enseignement.removeAttribute('id');
    return Enseignement;
};