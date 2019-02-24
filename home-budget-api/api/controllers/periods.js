const mongoose = require('mongoose'),
    model = mongoose.model('periods'),
    groupsModel = mongoose.model('groups'),
    controller = {};

controller.list = (req, res) => {
    model
    .find()
    .then(
        data => res.json(data),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    )
}

controller.get = (req, res) => {
    const id = req.params.id;
    model
    .findOne({ _id: id })
    .then(
        obj => res.json(obj),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.update = (req, res) => {
    const id = req.params.id;
    const obj = req.body;

    model
    .findByIdAndUpdate(id, obj)
    .then(
        data => res.json(data),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.create = (req, res) => {

    const obj = req.body;

    model
    .create(obj)
    .then(
        data => res.json(data),
        err => {
            console.log(err);
            res.status(500).json(err);
        }
    );
}

controller.remove = (req, res) => {
    model
    .deleteOne({ _id: req.id })
    .then(
        () => res.end(),
        err => {
            console.log(err);
            res.status(500).end();
        }
    );
}

controller.listGroups = (req, res) => {
    groupsModel
    .find({ period: req.params.periodId })
    .then(
        data => res.json(data),
        err => {
            res.status(500).json(err);
            console.log(err);
        }
    )
}

module.exports = controller;
