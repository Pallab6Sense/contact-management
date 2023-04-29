const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../../controllers/contactContoller/contactController");

router.route("/").post(createContact);

router.route("/").get(getAllContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
