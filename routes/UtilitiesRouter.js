
const router = require('express').Router()
const AreaController = require('../controllers/UtilitiesController')

router.route('/utities')
    .get(AreaController.getCategories)
    .post(AreaController.createCategory)
router.put('/utities/:id', AreaController.updateCategory)

module.exports = router