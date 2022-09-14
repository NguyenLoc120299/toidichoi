const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
        required: true
    },
    role: {
        type: String, default: 'user'
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: 'reviews'
    }],
    story: {
        type: String,
        default: '',
        maxlength: 200
    },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)