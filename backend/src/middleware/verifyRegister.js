const model = require("../models");

const { User } = model;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
    //Username
    User.findOne({
        where: {
            name: req.body.name
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username already in use"
            });
            return;
        }

        //Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Email already in use"
                });
                return;
            }

            next();
        })
    })
}

const verifyRegister = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
}

module.exports = verifyRegister;