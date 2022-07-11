const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:'comment'
    }],
    placeId: mongoose.Types.ObjectId,
}, {
    timestamps: true
})
module.exports = mongoose.model('review', reviewSchema)