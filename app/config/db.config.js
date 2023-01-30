module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "22011976",
    DB: "presence",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };