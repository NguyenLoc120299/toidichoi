const router = require('express').Router()
const userCtrl = require('../controllers/UserController')
const auth = require('../middleware/auth')

router.get('/profile',auth,userCtrl.getUser)

router.get('/profile/:id/reviews',auth,userCtrl.getReview)
module.exports=router