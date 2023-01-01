const express = require("express");
const { update, deleteUser, user, users } = require("../controllers/user");
const router = express.Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, update);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, user);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, users);

module.exports = router;
