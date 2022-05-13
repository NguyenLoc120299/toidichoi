const Users = require('../models/UserModel')
const Reviews = require('../models/ReviewModel')
const userCtrl={
    getUser: async (req,res)=>{
        try {
           const user = await Users.findById(req.user.id).select('-password')
           if(!user) return res.status(400).json("Người dùng không tồn tại") 
           res.json({user})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getReview : async (req,res)=>{
        const reviews =await Reviews.find({user: req.user.id})
        console.log(reviews);
    }
}

module.exports=userCtrl