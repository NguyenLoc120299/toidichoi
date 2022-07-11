const router = require('express').Router()
const auth = require('../middleware/auth')
const CommentCtrl= require('../controllers/CommentController')

router.post('/comment',auth,CommentCtrl.createComment)
router.patch('/comment/:id', auth, CommentCtrl.createComment)
router.patch('/comment/:id/like', auth, CommentCtrl.likeComent)
router.patch('/comment/:id/unlike', auth, CommentCtrl.unLikeComment)
module.exports=router