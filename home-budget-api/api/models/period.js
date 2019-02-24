const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String
    },
    from: {
        type: Date
    },
    to: {
        type: Date
    }
});

mongoose.model('periods', schema);