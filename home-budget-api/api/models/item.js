const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
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