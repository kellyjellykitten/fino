//Process authentication & authorization
//check if token provided which we get from x-access-token of HTTP headers
//then use jsonwebtoken's verify()

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;