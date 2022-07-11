const authCtrl = require('../controllers/AuthController')
const router = require('express').Router()

router.post('/register',authCtrl.resgister)
router.post('/refresh_token',authCtrl.generateAccessToken)
router.post('/login',authCtrl.login)
router.post('/logout', authCtrl.logout)
module.exports=router