const controller = require("../controller/etudiant.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
      app.post(
        "/api/etudiant",
        [
  
        ],
        controller.createEtudiant
        );
        app.get(
            "/api/etudiant",
            [
      
            ],
            controller.getEtudiants
        );

        app.delete(
            "/api/etudiant/:id",
            [
      
            ],
            controller.deleteEtudiant
        );
        
        app.put(
            "/api/etudiant/:id",
            [
      
            ],
            controller.updateEtudiant
        );
  };