const express = require("express");
const {
  signupUser,
  allUsers,
  oneSeller,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signupUser);
router.get("/allusers", allUsers);
router.get("/seller", oneSeller)

module.exports = router;
