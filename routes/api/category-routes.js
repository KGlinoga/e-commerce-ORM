const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"FML",err})
})
});

// The `/api/categories/ID NUMBER` endpoint
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // TODO: be sure to include its associated Products
  Category.findOne(
    {where: {id: req.params.id},
    include: [
      Product,
      {
        model: Product,
        through: Product,
      }
    ],}).then((data) => {
    res.json(data);
  });
});

// The `/api/categories` endpoint
router.post('/', (req, res) => {
  // create a new category
});

// The `/api/categories/ID NUMBER` endpoint
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// The `/api/categories/ID NUMBER` endpoint
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
