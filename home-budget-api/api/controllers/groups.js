const mongoose = require('mongoose'),
    model = mongoose.model('groups');
    controller = {};

controller.get = (req, res) => {
    model
    .findById(req.params.id)
    .then(
        group => res.json(group),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    )
}

controller.list = (req, res) => {
    model.find().then(
        data => res.json(data),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.create = (req, res) => {
    model.create(req.body).then(
        group => res.status(201).json(group),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.update = (req, res) => {
    model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(
        group => res.json(group),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

module.exports = controller;