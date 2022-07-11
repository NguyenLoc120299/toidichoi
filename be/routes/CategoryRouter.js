
const router = require('express').Router()
const categoryController = require('../controllers/CategoryController')

router.route('/category')
    .get(categoryController.getCategories)
    .post(categoryController.createCategory)
router.put('/category/:id', categoryController.updateCategory)

module.exports = router