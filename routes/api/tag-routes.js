const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll().then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"I have a bad feeling about this...",err})
})
});

// The `/api/tags/ID NUMBER` endpoint
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

// The `/api/tags` endpoint
router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name:req.body.tag_name
}).then(data=>{
    res.json(data)
}).catch(err=>{
    res.status(500).json({msg:"oh no! this isn't where I parked my car!",err})
})
});

// The `/api/tags/ID NUMBER` endpoint
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// The `/api/tags/ID NUMBER` endpoint
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
