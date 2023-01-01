const express = require("express");
const { create,  deleteOrder, userOrder, orders, getOrder } = require("../controllers/order");
const router = express.Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../utils/verifyToken");

//CREATE
router.post("/", verifyToken,create);

// //UPDATE
// router.put("/:id", verifyTokenAndAdmin,update);

//DELETE
router.delete("/:id", verifyTokenAndAdmin,deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, userOrder);

//GET ORDER
router.get("/:orderId", verifyTokenAndAdmin, getOrder);

//GET ALL
router.get("/", verifyTokenAndAdmin,orders);

module.exports = router;
