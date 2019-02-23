const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    categoryId: {
        type: String,
        required: true
    },

    value: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    }

});

mongoose.model('items', schema);