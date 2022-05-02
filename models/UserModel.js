const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        maxlength:25
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:'https://lh3.googleusercontent.com/a-/AOh14GiaOvzSFbQSM92HRkDoeiOU0vYCPM287Pif3iYaBg=s96-c'
    },
    role:{
        type:String,default:'user'
    },
    story:{
        type:String,
        default:'',
        maxlength:200
    },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
},{
    timestamps:true
})

module.exports=mongoose.model('user',userSchema)