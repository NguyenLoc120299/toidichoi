const Places = require('../models/PlaceModel.js')
const APIfeatures = require('../lib/features')
const PlaceCtrl = {

    getPlaces: async (req, res) => {
        try {
            const features = new APIfeatures(Places.find(), req.query).paginating()
            const places = await features.query
            res.json({
                msg: 'Success',
                result: places.length,
                places
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getPlaceSingle: async (req, res) => {
        try {
            const place = await Places.findById(req.params.id).populate('type utities')
                .populate({
                    path: "reviews",
                    populate: {
                        path: "user likes comments",
                        select: "-password",

                    }
                })
            res.json({
                msg: 'Success',
                ...place._doc
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
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
    },
    searchPlaces: async (req, res) => {
        try {
            const places = await Places.find({ name: { $regex: req.query.name } })
                .limit(10)
            res.json({ places })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getPlaceOutstanding: async (req, res) => {
        try {
            const result = await Places.aggregate(
                [

                    {
                        $unwind: "$reviews"
                    },
                    {
                        $group: { _id: "$_id", ct: { $sum: 1 } }
                    },
                    {
                        $lookup: {
                            from: "places",
                            let: { place_id: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$place_id"] } } },

                            ],
                            as: "totalData"
                        }
                    },
                    {
                        $sort: { ct: -1 }
                    },
                    {
                        $project: {
                            totalData: { $arrayElemAt: ["$totalData", 0] },
                            _id: 0
                        }
                    }

                ]
            )

            res.json(result);
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = PlaceCtrl