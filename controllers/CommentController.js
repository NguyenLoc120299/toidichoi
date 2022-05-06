const Comments = require('../models/CommentModel')
const Reviews= require('../models/ReviewModel')
const commentCtrl={
    createComment: async (req,res)=>{
        try {
            const { content, reviewId, reply, tag, reviewUserId} = req.body
            
            const review = await Reviews.findById(reviewId)
            if(!review) return res.status(400).json({msg:"Bài viết không tồn tại"})
            if(reply){
                const cm = await Comments.findById(reply)
                if(!cm) return res.status(400).json({msg:"Bình luận này không tồn tại"})
            }
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
    },
    updateComment: async (req,res)=>{
        try {
            const { content } = req.body
           const new_comment= await Comments.findOneAndUpdate({
                _id: req.params.id, user: req.user._id
            }, { content })

            res.json({...new_comment._doc})

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    likeComent: async (req,res)=>{
        try {
            const comment = await Comments.find({ _id: req.params.id, likes: req.user._id })
            if (comment.length > 0) return res.status(400).json({ msg: "2" })
            await Comments.findOneAndUpdate({ _id: req.params.id }, {
                $push: { likes: req.user._id }
            }, { new: true })

            res.json({ msg: 'Liked Comment!' })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    unLikeComment: async (req, res) => {
        try {

            await Comments.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { likes: req.user._id }
            }, { new: true })

            res.json({ msg: 'UnLiked Comment!' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports=commentCtrl