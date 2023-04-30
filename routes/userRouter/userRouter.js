const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUserInformation,
} = require("../../controllers/userController/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", getCurrentUserInformation);

module.exports = router;
