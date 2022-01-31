//controller for authentication has 2 main functions :
//register creates new User in database, and
//signin: find username of request in db if exists, compare password using bcrypt, generate token, return user info & access token

const config = require("../config/auth.config");
const model = require("../models");

const { User } = model;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.register = (req, res) => {
    //Save User to database
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then((user) => {

            // const userData = 'SELECT * FROM "Users" WHERE name = $1'
            // const userArr = userData.rows
            // if (userArr.length != 0) {
            //     return res.status(400).send({ message: "Username already in use" })
            // }

            // const emailData = 'SELECT * FROM "Users" WHERE email = $1'
            // const emailArr = emailData.rows
            // if (emailArr.length !=0) {
            //     return res.status(400).send({ message: "Email already in use" })
            // }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 //24 hours
            })
            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                accessToken: token,
                message: "User created successfully"
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    console.log("receive request", req.body)
    User.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            console.log("found user", user)
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid password"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 //24 hours
            })

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

