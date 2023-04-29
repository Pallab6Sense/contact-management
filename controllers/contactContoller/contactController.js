const asyncHandler = require("express-async-handler");
//! @desc Create a contact
//! @route POST api/contacts
//! @access public
const createContact = asyncHandler((req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }
  res.status(201).json({ message: "create contact", data: req.body });
});
 
//! @desc Get all contacts
//! @route GET api/contacts
//! @access public
const getAllContacts = asyncHandler((req, res) => {
  res.status(200).json({ message: "get all contact" });
});

//! @desc Get a contact
//! @route GET api/contacts/:id
//! @access public
const getContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

//! @desc Update a contact
//! @route PUT api/contacts/:id
//! @access public
const updateContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//! @desc Delete a contact
//! @route DELETE api/contacts/:id
//! @access public
const deleteContact = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
