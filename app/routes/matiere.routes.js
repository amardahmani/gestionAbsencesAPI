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
      "/api/admin/matieres",
      [

      ],
      controller.createMatiere
    )
    app.delete(
      "/api/admin/matieres/:code_module",
      [

      ],
      controller.deleteMatiere
    )
    
    app.put(
      "/api/admin/matieres/:code_module",
      [

      ],
      controller.updateMatiere
    )

    app.get(
      "/api/admin/matieres",
      [

      ],
      controller.getMatieres
    )
  };