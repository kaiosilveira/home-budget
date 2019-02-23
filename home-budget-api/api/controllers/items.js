const mongoose = require('mongoose'),
    model = mongoose.model('items'),
    controller = {};

controller.get = (req, res) => {
    model
    .findById(req.params.id)
    .then(
        item => res.json(item),
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
        items => res.json(items),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.listByCategoryId = (req, res) => {
    model
    .find({ categoryId: req.params.categoryId })
    .then(
        items => res.json(items),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );   
}

controller.create = (req, res) => {
    const item = JSON.parse(req.body);
    model
    .create(item)
    .then(
        item => res.status(201).json(item),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

module.exports = controller;