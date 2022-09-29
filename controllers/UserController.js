const Users = require('../models/UserModel')
const Reviews = require('../models/ReviewModel')
const userCtrl = {
    getAllUser: async (req, res) => {
        try {
            const users = await Users.find()
            res.json({ users })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if (!user) return res.status(400).json("Người dùng không tồn tại")
            res.json({ user })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getReview: async (req, res) => {
        const reviews = await Reviews.find({ user: req.user.id })
        console.log(reviews);
    },
    updateProfile: async (req, res) => {
        try {
            const { username, avatar } = req.body
            const user = await Users.findOneAndUpdate({ _id: req.user._id }, {
                avatar, username
            })
            const newUser = { ...user, avatar, username }
            res.json({ newUser })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getUserTrending: async (req, res) => {
        try {
            const result = await Users.aggregate([
                {
                    $unwind: "$blogs"
                },
                {
                    $group: { _id: "$_id", ct: { $sum: 1 } }
                },
                {
                    $lookup: {
                        from: "users",
                        let: { user_id: "$_id" },
                        pipeline: [
                            { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },

                        ],
                        as: "users"
                    }
                },
                {
                    $unwind: "$users"
                },
                {
                    $sort: { ct: -1 }
                },
                {
                    $limit: 10
                },
                {
                    $project: {
                        password: 0,
                        _id: 0,
                        ct: 0,

                    }
                }

            ])
            return res.json(result)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getProfile: async (req, res) => {
        try {
            const { id } = req.params
            const user = await Users.findById(id)
            return res.json(user)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    follow: async (req, res) => {
        try {
            const user = await Users.find({ _id: req.params.id, followers: req.user._id })
            if (user.length > 0) return res.status(500).json({ msg: "You followed this user." })

            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $push: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $push: { following: req.params.id }
            }, { new: true })

            res.json({ newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    unfollow: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $pull: { following: req.params.id }
            }, { new: true })

            res.json({ newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = userCtrl