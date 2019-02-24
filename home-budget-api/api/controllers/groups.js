const mongoose = require('mongoose'),
    model = mongoose.model('groups'),
    categoriesModel = mongoose.model('categories'),
    controller = {};

const stdErr = err => {
    console.log(err);
    res.status(500).json(err);
};

controller.get = (req, res) => {
    model.findById(req.params.id)
    .then(group => res.json(group), stdErr)
}

controller.list = (req, res) => {
    model.find().then(data => res.json(data), stdErr)
}

controller.create = (req, res) => {
    model.create(req.body).then(group => res.status(201).json(group),stdErr)
}

controller.update = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body).then(group => res.json(group), stdErr)
}

controller.listCategories = (req, res) => {
    categoriesModel.find({ group: req.params.id }).then(categories => res.json(categories), stdErr)
}

module.exports = controller;