const controller = require("../controllers/caption.controller");

module.exports = function(app) {
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    app.post("/api/addCaption", controller.addCaption);

    app.get("/api/captions", controller.getCaptions);
    
    app.get("/api/captions/:id", controller.getCaptionsForImage);

};
