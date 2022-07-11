const Category = require('../models/Categories')

const categoryController = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createCategory: async (req, res) => {
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const { name, image } = req.body;
            const category = await Category.findOne({ name })
            if (category) return res.status(400).json({ msg: "This category already exists." })

            const newCategory = new Category({ name, image })

            await newCategory.save()
            res.json({ msg: "Created a category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { name, image } = req.body;
            await Category.findOneAndUpdate({ _id: req.params.id }, { name, image })

            res.json({ msg: "Updated a category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = categoryController