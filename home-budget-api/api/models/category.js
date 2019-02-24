const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    },

    items: {
        type: Array
    },

    color: {
        type: String
    },

    backgroundColor: {
        type: String
    }

});

mongoose.model('categories', schema);