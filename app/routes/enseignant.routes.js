
const controller = require('../controllers/enseignant.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/admin/enseignant",
      [

      ],
      controller.createEnseignant
      );
    
    app.get(
      "/api/admin/enseignant",
      [

      ],
      controller.getEnseignants
    );

    app.delete(
      "/api/admin/enseignant",
      [

      ],
      controller.deleteEnseignant
    );
  
  };