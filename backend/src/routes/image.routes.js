const controller = require("../controllers/image.controller");

module.exports = function(app) {

  var setHeaders = function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    // res.end()
    next()
  }

  app.use(setHeaders);

  app.get("/api/image", controller.getImage);

};