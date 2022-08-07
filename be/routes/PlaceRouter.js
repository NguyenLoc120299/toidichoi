const router = require('express').Router()
const placeCtrl = require('../controllers/PlaceController')

router.get('/places', placeCtrl.getPlaces)
router.post('/places', placeCtrl.createPlaces)
router.get('/place/:id', placeCtrl.getPlaceSingle)
router.get('/places/search', placeCtrl.searchPlaces)
router.get('/place-outstanding', placeCtrl.getPlaceOutstanding)
router.post('/search', placeCtrl.filterPlaces)
// router.post('/search', placeCtrl.searchAllPlace)
module.exports = router