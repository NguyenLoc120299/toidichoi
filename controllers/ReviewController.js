const Reviews = require('../models/ReviewModel')
const Places = require('../models/PlaceModel')

const reviewCtrl = {
    createReview: async (req, res) => {
        try {
            const { title, content, placeId, images,rateNumber } = req.body
            const place = await Places.findById(placeId)
            if (!place) return res.status(400).json({ msg: "Địa điểm không còn tồn tại" })
            const newReview = new Reviews({
                user: req.user._id, title, content, placeId, images
            })
            const newTurnNumber = Number.parseFloat(place.rate.turnNumber) +1 
            const newRateNumber=place.rate.rateNumber+ (rateNumber/newTurnNumber)
            const newRate={
                rateNumber:newRateNumber,
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
                newReview
            })
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    },
    reviewSingle: async (req,res)=>{
        try {
            const review = await Reviews.findById(req.params.id).populate('comments likes user')
            
            res.json({
                review
            }) 
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }
    }
}
module.exports = reviewCtrl