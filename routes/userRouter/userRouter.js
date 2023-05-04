const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUserInformation,
} = require("../../controllers/userController/userController");
const validateToken = require("../../middleware/tokenHandler/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, getCurrentUserInformation);

module.exports = router;
