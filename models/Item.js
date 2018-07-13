
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);