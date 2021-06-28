const router = require('express').Router();
const Product = require('../models/Product')

router.post("/",async (req,res)=> {
    const name = req.body.name;
    const desc = req.body.desc;

    const product = new Product({ name:name,desc:desc});

    try{
        await product.save();
        res.send("data insett")
    } catch (err) {
        console.log(err);
    }
});

router.get("/",async (req,res) => {
  Product.find({},(err,result) => {
      if(err) {
          res.send(err);
      }
      res.send(result)
  })
})

module.exports = router