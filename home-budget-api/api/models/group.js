const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    periodId: {
        type: String
    }
});

mongoose.model('groups', schema);