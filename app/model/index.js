const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.role = require("../model/role.model.js")(sequelize, Sequelize);
db.absence = require("../model/absence.model.js")(sequelize, Sequelize);
db.etudiant = require("../model/etudiant.model.js")(sequelize, Sequelize);
db.matiere = require("../model/matiere.model.js")(sequelize, Sequelize);
db.seance = require("../model/seance.model.js")(sequelize, Sequelize);
db.enseignant = require("../model/enseignant.model.js")(sequelize, Sequelize);
db.justification = require("../model/justification.model.js")(sequelize, Sequelize);
db.enseignement = require("../model/enseignement.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.user.hasOne(db.etudiant);
db.etudiant.belongsTo(db.user);

db.user.hasOne(db.enseignant);
db.enseignant.belongsTo(db.user);

db.absence.hasOne(db.justification);
db.justification.belongsTo(db.absence);

db.seance.hasMany(db.absence);
db.etudiant.hasMany(db.absence);

db.matiere.hasMany(db.seance,{
  foreignKey: "matiere"
});

db.seance.belongsToMany(db.enseignant, {
  through: db.enseignement,
  foreignKey: "seance",
  otherKey: "enseignant"
})

db.enseignant.belongsToMany(db.seance, {
  through: db.enseignement,
  foreignKey: "enseignant",
  otherKey: "seance"
})



db.ROLES = ["admin","chefDepartement", "enseignant", "etudiant"];




module.exports = db;