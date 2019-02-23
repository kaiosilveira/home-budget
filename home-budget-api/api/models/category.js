const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    groupId: {
        type: String,
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