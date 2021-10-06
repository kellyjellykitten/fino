const controller = require("../controllers/image.controller");

module.exports = function(app) {

  var setHeaders = function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    // res.end()
    next()
  }

  app.use(setHeaders);

  app.get("/api/images", controller.getImages);
  app.get("/api/image/:id", controller.getImage);

};