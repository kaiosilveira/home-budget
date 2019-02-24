const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    period: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'periods',
        required: true
    }
});

mongoose.model('groups', schema);