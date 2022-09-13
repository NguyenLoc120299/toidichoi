const Places = require('../models/PlaceModel.js')
const APIfeatures = require('../lib/features')
const moment = require('moment')
const MapPlaceModel = require('../models/MapPlaceModel.js')
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
            const place = await Places.findOne({ _id: req.params.id }).populate('type utities')
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
            const newMapPlace = new MapPlaceModel({
                long: "",
                lat: "",
                place: newPlace._id
            })
            await newPlace.save()
            await newMapPlace.save()
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
    getPlaceAll: async (req, res) => {
        try {
            const result = await MapPlaceModel.find()
            res.json(result);
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
    },
    filterPlaces: async (req, res) => {
        try {
            let filter = [{}]
            const currentHour = moment().format('HH:mm')
            const { utitiesData, typeData, priceData, isTimeOpen, areaData } = req.body
            if (utitiesData.length > 0) {
                filter[0].utities = { $in: utitiesData }
            }
            if (areaData.length > 0) {
                filter[0].area = { $in: areaData }
            }
            if (typeData.length > 0) {
                filter[0].type = { $in: typeData }
            }
            if (priceData.length > 0) {
                filter.push({ "price.min": { $gte: priceData[0] } })
                filter.push({ "price.max": { $lte: priceData[1] } })
            }

            const places = await Places.find({ $and: filter })
            const data = []
            if (isTimeOpen) {
                for (let i = 0; i < places.length; i++) {
                    if (moment(currentHour, 'HH:mm').isBefore(moment(places[i].time.max, 'HH:mm')) &&

                        moment(currentHour, 'HH:mm').isAfter(moment(places[i].time.min, 'HH:mm'))) {
                        data.push(places[i])


                    }

                }
            }
            else {
                data.push(...places)

            }
            res.json({ data })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = PlaceCtrl