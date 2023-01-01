const express = require('express');
const router = express.Router();
const {create, update, deleteProduct, product, products} = require('../controllers/product');
const {
    verifyTokenAndAdmin,
  } = require("../utils/verifyToken");

router.post("/", verifyTokenAndAdmin, create);
router.put("/:id", verifyTokenAndAdmin, update);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.post("/", verifyTokenAndAdmin, create);
router.get("/find/:id",product);
router.get("/",products);


module.exports = router;
