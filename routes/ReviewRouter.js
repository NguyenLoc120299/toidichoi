const router = require('express').Router()
const auth = require('../middleware/auth')
const reviewCtrl = require('../controllers/ReviewController')

router.post('/review', auth, reviewCtrl.createReview)

router.get('/review/:id',reviewCtrl.reviewSingle)

module.exports = router