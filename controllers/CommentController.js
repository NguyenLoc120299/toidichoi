const Comments = require('../models/CommentModel')
const Reviews= require('../models/ReviewModel')
const commentCtrl={
    createComment: async (req,res)=>{
        try {
            const { content, reviewId, reply, tag, reviewUserId} = req.body
            const review = await Reviews.findById(reviewId)
            if(!review) return res.status(400).json({msg:"Bài viết không tồn tại"})
            // if(reply){
            //     const cm = await Comments.findById(reply)
            //     if(!cm) return res.status(400).json({msg:"Bình luận này không tồn tại"})
            // }
            const  newComment = new Comments({
                user:req.user._id,content,tag,reply,reviewUserId,reviewId
            })

            await Reviews.findOneAndUpdate({_id:reviewId},{
                $push:{comments: newComment._id}
            },{new:true})

            await newComment.save()

            res.json({newComment})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
}

module.exports=commentCtrl