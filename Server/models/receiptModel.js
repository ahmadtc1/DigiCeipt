const mongoose = require('mongoose');
const receiptModel = mongoose.Schema ({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    group: {
        type: String
    }
});

module.exports = mongoose.model('Receipt', receiptModel);