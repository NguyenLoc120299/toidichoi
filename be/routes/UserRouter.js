const router = require('express').Router()
const userCtrl = require('../controllers/UserController')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
router.get('/profile', auth, userCtrl.getUser)

router.get('/get-user', auth, admin, userCtrl.getAllUser)

router.get('/profile/:id/reviews', auth, userCtrl.getReview)

router.patch('/profile', auth, userCtrl.updateProfile)

router.get('/user-trending', userCtrl.getUserTrending)

router.get('/user/:id', userCtrl.getProfile)

router.patch('/user/:id/follow', auth, userCtrl.follow)

router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)

module.exports = router