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
        type: Object,

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
    rate:{
        type:Object,
        required:true,
        default:{
           turnNumber: 0,
           rateNumber:0
        }
    },
    images: {
        type: Array,
        required: true
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: 'review'
    }],
    isShow: {
        type:Boolean,
        required:true,
        default:false
    }



}, {
    timestamps: true
})

module.exports = mongoose.model('Place', PlaceSchema)
