const controller = require("../controllers/etudiant.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
      app.post(
        "/api/admin/etudiant",
        [
  
        ],
        controller.createEtudiant
        );
        app.get(
            "/api/admin/etudiant",
            [
      
            ],
            controller.getEtudiants
        );

        app.delete(
            "/api/admin/etudiant/:id",
            [
      
            ],
            controller.deleteEtudiant
        );
        
        app.put(
            "/api/admin/etudiant/:id",
            [
      
            ],
            controller.updateEtudiant
        );
  };