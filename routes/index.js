const areaRouter = require('./AreaRouter')
const categoryRouter = require('./CategoryRouter')
const placeRouter = require('./PlaceRouter')
const utitiesRouter = require('./UtilitiesRouter')
const authRouter = require('./AuthRouter')
const review = require('./ReviewRouter')
const comment= require('./CommentRouter')
const routes = [
    areaRouter,
    categoryRouter,
    placeRouter,
    utitiesRouter,
    authRouter,
    review,
    comment
    
]

module.exports = routes