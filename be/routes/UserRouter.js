const router = require('express').Router()
const userCtrl = require('../controllers/UserController')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
router.get('/profile', auth, userCtrl.getUser)

router.get('/get-user',auth,admin,userCtrl.getAllUser)

router.get('/profile/:id/reviews', auth, userCtrl.getReview)

router.patch('/profile', auth, userCtrl.updateProfile)

router.get('/user-trending', userCtrl.getUserTrending)

module.exports = router