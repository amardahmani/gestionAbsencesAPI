const controller = require("../controllers/matiere.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/matieres",
      [

      ],
      controller.createMatiere
    )
    app.delete(
      "/api/matieres/:code_module",
      [

      ],
      controller.deleteMatiere
    )
    
    app.put(
      "/api/matieres/:code_module",
      [

      ],
      controller.updateMatiere
    )

    app.get(
      "/api/matieres",
      [

      ],
      controller.getMatieres
    )
  };