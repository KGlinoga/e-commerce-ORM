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
    Category.create({
      category_name: req.body.category_name
    }).then((newCategory)=>{
      res.json(newCategory);
    })
    .catch(err=>{
      res.status(500).json({msg:"huh, this isn't where I parked my car..",err});
    });
});
// what  the json supposed to look like??

// The `/api/categories/ID NUMBER` endpoint
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    }, 
    {
    where: {
      id: req.params.id,
    },
  }).then((updatedCategory)=>{
    res.json(updatedCategory);
  })
  // check here for end of product
  .catch((err) => 
    // console.log(err);
    res.status(400).json(err));
  });


// The `/api/categories/ID NUMBER` endpoint
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
