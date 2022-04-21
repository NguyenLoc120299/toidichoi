const authCtrl = require('../controllers/AuthController')
const router = require('express').Router()

router.post('/register',authCtrl.resgister)
router.post('/refresh_token',authCtrl.generateAccessToken)
router.post('/login',authCtrl.login)
module.exports=router