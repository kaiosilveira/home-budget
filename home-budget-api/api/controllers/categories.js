const mongoose = require('mongoose'),
    model = mongoose.model('categories'),
    controller = {};

controller.get = (req, res) => {
    model
    .findById(req.params.id)
    .then(
        category => res.json(category),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.list = (req, res) => {
    model
    .find()
    .then(
        categories => res.json(categories),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.create = (req, res) => {
    model
    .create(req.body)
    .then(
        category => res.status(201).json(category),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

module.exports = controller;