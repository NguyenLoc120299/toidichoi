const MapPlaceModel = require("../models/MapPlaceModel");


const mapController = {
    getAllMapPlaces: async (req, res) => {
        try {
            const maps = await MapPlaceModel.find()
            res.json(maps)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createMap: async (req, res) => {
        try {
            const { long, lat, place } = req.body;
            const map = await MapPlaceModel.findOne({ place })
            if (map) return res.status(400).json({ msg: "Bản đồ cho địa điểm này đã tồn tại" })

            const newMapPlace = new MapPlaceModel({ long, lat, place })

            await newMapPlace.save()
            res.json({ msg: "Created a map" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { long, lat } = req.body;
            await MapPlaceModel.findOneAndUpdate({ _id: req.params.id }, { long, lat })

            res.json({ msg: "Updated a map " })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getMapByPlace: async (req, res) => {
        try {
            const maps = await MapPlaceModel.find({
                place: req.params.placeId
            })
            res.json(maps)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = mapController