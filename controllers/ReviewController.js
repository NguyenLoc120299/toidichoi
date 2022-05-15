const Reviews = require('../models/ReviewModel')
const Places = require('../models/PlaceModel')
const formatDate = require('../lib/moment')
const reviewCtrl = {
    createReview: async (req, res) => {
        try {
            const { title, content, placeId, images, rateNumber } = req.body
            const place = await Places.findById(placeId)
            if (!place) return res.status(400).json({ msg: "Địa điểm không còn tồn tại" })
            const newReview = new Reviews({
                user: req.user._id, title, content, placeId, images
            })
            const newTurnNumber = Number.parseFloat(place.rate.turnNumber) + 1
            const newRateNumber = (place.rate.rateNumber * place.rate.turnNumber + rateNumber) / newTurnNumber
            const newRate = {
                rateNumber: newRateNumber,
                turnNumber: newTurnNumber
            }
            await Places.findOneAndUpdate({
                _id: placeId
            }, {
                $push: { reviews: newReview._id },
                rate: newRate
            }, { new: true })

            await newReview.save()

            res.json({
                msg: "Cám ơn bạn đã review địa điểm này",
                newReview,

            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    reviewSingleByPlace: async (req, res) => {
        try {
            const review = await Reviews.find({ placeId: req.params.placeId })
                .populate({
                    path: "user",
                    select: "avatar username"
                })
                .populate({
                    path: "comments",
                    populate: 'user',

                })
            review.sort()
            res.json({
                review,
                total: review.length
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    reviewSingle: async (req, res) => {
        try {
            const review = await Reviews.findById(req.params.id)
                .populate({
                    path: "likes",
                    select: "-password"
                })
                .populate({
                    path: "comments",
                    populate: {
                        path: "user",
                        select: "username avatar"
                    },

                })

            // const review = await Reviews.aggregate([
            //     {
            //         $match:{
            //             _id:mongoose.Types.ObjectId(req.params.id)
            //         }

            //     },
            //     {
            //         $lookup:{
            //             from:"users",
            //             let:{user_id : "$user"},
            //             pipeline: [
            //                 { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
            //                 { $project: { password: 0 } }
            //             ],
            //             as: "user"
            //         }
            //     },
            //     { $unwind: "$user" },
            // ])
            res.json({
                ...review._doc,
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    updateReview: async (req, res) => {
        try {
            const { title, content, images } = req.body
            const review = await Reviews.findOneAndUpdate({ _id: req.params.id }, {
                title, content, images
            })
            res.json({
                msg: "Cập nhật thành công",
                new_review: {
                    ...review._doc,
                    content, title, images
                }
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    likeReview: async (req, res) => {
        try {
            const review = await Reviews.find({ _id: req.params.id, likes: req.user._id })
            if (review.length > 0) return res.status(400).json({ msg: 'Bạn đã like bài đăng này.' })

            const like = await Reviews.findOneAndUpdate({ _id: req.params.id }, {
                $push: { likes: req.user._id }
            }, { new: true })
            if (!like) return res.status(400).json({ msg: 'Bài đăng không tồn tại.' })
            res.json({ msg: 'Liked Post!' })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    unLikeReview: async (req, res) => {
        try {

            const like = await Reviews.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { likes: req.user._id }
            }, { new: true })

            if (!like) return res.status(400).json({ msg: 'Bài đăng không tồn tại.' })

            res.json({ msg: 'UnLiked Post!' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}
module.exports = reviewCtrl