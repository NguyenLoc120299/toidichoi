const Places = require('../models/PlaceModel.js')

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}
const PlaceCtrl = {

    getPlaces: async (req, res) => {
        try {
            const features = new APIfeatures(Places.find(), req.query).paginating()
            const places = await features.query.sort('-createAt')
            res.json({
                msg: 'Success',
                result: places.length,
                places
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getPlaceSingle: async (req,res)=>{
        try {
            const place = await Places.findById(req.params.id).populate('type utities')
            res.json({
                msg:'Success',
                place
            })
        } catch (error) {
            return res.status(500).json({msg:err.message})
        }
    },
    createPlaces: async (req, res) => {
        try {
            const {
                name,
                area,
                address,
                direct,
                intro,
                owner,
                time,
                price,
                type,
                utities,
                phone,
                facbook,
                instagram,
                email,
                website,
                images
            }
                = req.body

            if (images.length === 0)
                return res.status(400).json({ msg: "Vui lòng thêm ảnh." })
            const newPlace = new Places({
                name,
                area,
                address,
                direct,
                intro,
                owner,
                time,
                price,
                type,
                utities,
                phone,
                facbook,
                instagram,
                email,
                website,
                images
            })
            await newPlace.save()
            res.json({
                msg: 'Thêm địa điểm thành công',
                newPlace: {
                    ...newPlace._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = PlaceCtrl