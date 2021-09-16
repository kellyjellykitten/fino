const config = require("../config/auth.config")
const model = require("../models");

const { User } = model;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

async function register(req, res) {
    // const {email, password, name} = req.body;
    try {
        const user = await User.findOne({where: { email: req.body.email }});
        if(user) {
            return res.status(422)
            .send({message: "User with that email already exists"});
        }
        await User.create({
            username: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
        return res.status(201).send({message: "Account created successfully"});
    } catch(e) {
        console.log(e);
        return res.status(500)
        .send({ message: "Could not perform operation at this time. Try again later."})
    }
}


module.exports.register = register;


//how to export multiple async functions? or how to deal with async?
//need to include signin function using jwt & config
// exports.signin = (req, res) => {
//     User.findOne({
//       where: {
//         username: req.body.username
//       }
//     })
//       .then(user => {
//         if (!user) {
//           return res.status(404).send({ message: "User Not found." });
//         }
  
//         var passwordIsValid = bcrypt.compareSync(
//           req.body.password,
//           user.password
//         );
  
//         if (!passwordIsValid) {
//           return res.status(401).send({
//             accessToken: null,
//             message: "Invalid Password!"
//           });
//         }
  
//         var token = jwt.sign({ id: user.id }, config.secret, {
//           expiresIn: 86400 // 24 hours
//         });

//       })
//       .catch(err => {
//         res.status(500).send({ message: err.message });
//       });
//   };

//possible also need auth middleware for token auth
//auth middleware -- USED IN USER ROUTE
// const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
// const db = require("../models");
// const User = db.user;

// verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send({
//       message: "No token provided!"
//     });
//   }

//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({
//         message: "Unauthorized!"
//       });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// const authJwt = {
//   verifyToken: verifyToken
// };
// module.exports = authJwt;



// Role.findAll({where: {name: {[Op.or]: req.body.roles}}})