
const router = require('express').Router()
const AreaController = require('../controllers/AreaController')

router.route('/area')
    .get(AreaController.getCategories)
    .post(AreaController.createCategory)
router.put('/area/:id', AreaController.updateCategory)

module.exports = router