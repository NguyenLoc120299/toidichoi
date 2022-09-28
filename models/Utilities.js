const mongoose = require('mongoose')

const UtilitieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Utilities', UtilitieSchema)