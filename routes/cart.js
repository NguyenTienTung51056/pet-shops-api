const express = require("express");
const router = express.Router();
const {
  create,
  update,
  userCart,
  carts,
  deleteCart,
} = require("../controllers/cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//CREATE
router.post("/", verifyToken, create);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, userCart);

// //GET ALL

router.get("/", verifyTokenAndAdmin, carts);

module.exports = router;
