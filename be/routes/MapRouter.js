const mapController = require('../controllers/MapController')

const router = require('express').Router()


router.route('/map')
    .get(mapController.getAllMapPlaces)
    .post(mapController.createMap)
router.put('/map/:id', mapController.updateCategory)
router.get('/map-place/:placeId', mapController.getMapByPlace)

module.exports = router