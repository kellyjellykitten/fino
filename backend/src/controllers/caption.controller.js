const model = require("../models");

const { Caption } = model;

exports.addCaption = (req, res) => {
    Caption.create({
        user_id: req.body.user_id,
        body: req.body.body,
        post_id: req.body.post_id
    })
        .then(() => {
            res.send({ message: "Caption created successfully" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};


exports.getCaptions = (req, res) => {
    res.status(200).send("Captions");
}

exports.getCaption = (req, res) => {
    res.status(200).send("Caption")
}
