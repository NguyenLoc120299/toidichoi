const auth = require('../middleware/auth')
const authCtrl = require('../controllers/AuthController')
const router = require('express').Router()

router.post('/register', authCtrl.resgister)
router.post('/refresh_token', authCtrl.generateAccessToken)
router.post('/login', authCtrl.login)
router.post('/logout', auth, authCtrl.logout)
router.post('/active', authCtrl.activeAccount)
router.post('/googleLogin', authCtrl.googleLogin)
module.exports = router