const mongoose = require('mongoose'),
    model = mongoose.model('categories'),
    controller = {};

const stdErr = err => {
    console.log(err);
    res.status(500).json(err);
}

controller.get = (req, res) => {
    model
    .findById(req.params.id)
    .then(category => res.json(category), stdErr);
}

controller.list = (req, res) => {
    model
    .find()
    .then(categories => res.json(categories), stdErr);
}

controller.create = (req, res) => {
    model
    .create(req.body)
    .then(category => res.status(201).json(category), stdErr);
}

module.exports = controller;