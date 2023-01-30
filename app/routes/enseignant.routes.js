
const controller = require('../controller/enseignant.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/enseignant",
      [

      ],
      controller.createEnseignant
      );
    
    app.get(
      "/api/enseignant",
      [

      ],
      controller.getEnseignants
    );

    app.delete(
      "/api/enseignant",
      [

      ],
      controller.deleteEnseignant
    );
  
  };