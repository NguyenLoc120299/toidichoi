const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    area: {
        type: mongoose.Types.ObjectId,
        ref: 'Area',
    },
    address: {
        type: String,
        required: true,
    },
    direct: {
        type: String
    },
    intro: String,
    owner: Number,
    time: {
        type: Object
    },
    price: {
        type: Object
    },
    type: [
        {
            type: mongoose.Types.ObjectId, ref: 'Category'
        }
    ],
    utities: [
        {
            type: mongoose.Types.ObjectId, ref: "Utilities"
        }
    ],
    phone: String,
    facbook: String,
    instagram: String,
    email: String,
    website: String,
    images: {
        type: Array,
        required: true
    }



}, {
    timestamps: true
})

module.exports = mongoose.model('Place', PlaceSchema)
