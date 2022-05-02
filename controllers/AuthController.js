const jwt = require('jsonwebtoken')
const Users = require('../models/UserModel')
const bcrypt = require('bcrypt')
const authCtrl = {
    resgister: async (req, res) => {
        try {
            const { username, email, password, confirmPassword } = req.body
            let newUserName = username.toLowerCase().replace(/ /g, '')

            const user_name = await Users.findOne({ username: newUserName })
            if (user_name) return res.status(400).json({ msg: 'Tên người dùng đã tồn tại' })

            const user_email = await Users.findOne({ email })
            if (user_email) return res.status(400).json({ msg: 'Email này đã tồn tại' })

            if (password != confirmPassword) return res.status(400).json({ msg: 'Xác nhận mật khẩu không trùng khớp' })

            if (password.length < 6) return res.status(400).json({ msg: "Mật khẩu dài hơn 6 kí tự" })

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                username, email, password: passwordHash
            })
            const access_token = createAccessToken({ id: newUser._id })
            const refresh_token = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })
            await newUser.save()
            res.json({
                msg: "Đăng kí thành công",
                access_token,
                user: {
                    ...newUser._doc,
                    password: 'Thách xem mật khẩu'
                }
            })
        } catch (error) {
            return res.status(500).json({ mag: error.message })
        }

    },
    login: async (req,res)=>{
        try {
            const { email, password } = req.body
            const user = await Users.findOne({ email }).populate('followers following')
            if (!user) return res.status(400).json({ msg: "Email không tồn tại" })
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Mật khẩu không đúng." })
            const access_token = createAccessToken({ id: user._id })
            const refresh_token = createRefreshToken({ id: user._id })
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })
            res.json({
                msg: 'Đăng nhập thành công!',
                access_token,
                user: {
                    ...user._doc,
                    password: 'thách lấy mật khẩu'
                }
            })
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    
    },
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token) return res.status(400).json({ msg: "Vui lòng đăng nhập" })
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async (err, result) => {
                if (err) return res.status(400).json({ msg: 'Vui lòng đăng nhập' })
                const user = await Users.findById(result.id).select('-password').populate('followers following')
                if (!user) res.status(400).json({ msg: 'Người dùng không tồn tại' })
                const access_token = createAccessToken({ id: result.id })
                res.json({
                    access_token,
                    user
                })
            })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/api/refresh_token' })
            return res.json({ msg: "Logged out!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

}
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
}

module.exports = authCtrl