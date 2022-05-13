const areaRouter = require('./AreaRouter')
const categoryRouter = require('./CategoryRouter')
const placeRouter = require('./PlaceRouter')
const utitiesRouter = require('./UtilitiesRouter')
const authRouter = require('./AuthRouter')
const review = require('./ReviewRouter')
const comment= require('./CommentRouter')
const user = require('./UserRouter')
const routes = [
    areaRouter,
    categoryRouter,
    placeRouter,
    utitiesRouter,
    authRouter,
    review,
    comment,
    user
    
]

module.exports = routes