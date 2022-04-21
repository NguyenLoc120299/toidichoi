const areaRouter = require('./AreaRouter')
const categoryRouter= require('./CategoryRouter')
const placeRouter = require('./PlaceRouter')
const utitiesRouter= require('./UtilitiesRouter')
const authRouter= require('./AuthRouter')
const routes=[
    areaRouter,
    categoryRouter,
    placeRouter,
    utitiesRouter,
    authRouter
]

module.exports=routes