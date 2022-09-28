const mongoose = require('mongoose')

const mapSchema = new mongoose.Schema({
    long: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    place: { type: mongoose.Types.ObjectId, ref: 'Place' },
}, {
    timestamps: true
})

module.exports = mongoose.model('map', mapSchema)