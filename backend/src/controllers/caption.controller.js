const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'caption_two',
    password: 'beepisscum'
})

const model = require("../models");

const { Caption } = model;

exports.addCaption = (req, res) => {
    console.log('adding caption', req.body)
    Caption.create({
        user_id: req.body.user_id,
        body: req.body.body,
        image_id: req.body.image_id
    })
        .then(() => {
            res.send({ message: "Caption created successfully" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};


exports.getCaptions = (req, res) => {
    pool.query('SELECT * FROM "Captions" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

exports.getCaptionsForImage = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM "Captions" WHERE image_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}


