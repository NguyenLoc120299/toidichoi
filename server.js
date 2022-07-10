require("dotenv").config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api', require('./routes/index'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI,
    {
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to mongodb')
    })


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000



app.listen(port, () => {
    console.log('Server is running on port', port)
})
