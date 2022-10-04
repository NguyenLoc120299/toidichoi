const router = require('express').Router()
const auth = require('../middleware/auth')
const reviewCtrl = require('../controllers/ReviewController')

router.post('/review', auth, reviewCtrl.createReview)

router.get('/review/:id', reviewCtrl.reviewSingle)

router.get('/list-reviews/:id', reviewCtrl.getListReviewsByUser)

router.get('/list-review/:placeId', reviewCtrl.reviewSingleByPlace)

router.patch('/review/:id', auth, reviewCtrl.updateReview)

router.patch('/review/:id/like', auth, reviewCtrl.likeReview)

router.patch('/review/:id/unlike', auth, reviewCtrl.unLikeReview)

router.get('/listAll-reviews', reviewCtrl.getListReviews)

router.get('/viewsByFollowing', auth, reviewCtrl.getReviewByUserFollow)

router.get('/getReviewSingle/:id', reviewCtrl.getReviewSingle)
module.exports = router