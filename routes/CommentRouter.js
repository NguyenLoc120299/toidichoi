const router = require('express').Router()
const auth = require('../middleware/auth')
const CommentCtrl= require('../controllers/CommentController')

router.post('/comment',auth,CommentCtrl.createComment)

module.exports=router