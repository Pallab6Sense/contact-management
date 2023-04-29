const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contactModel/contactModel");
//! @desc Create a contact
//! @route POST api/contacts
//! @access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

//! @desc Get all contacts
//! @route GET api/contacts
//! @access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//! @desc Get a contact
//! @route GET api/contacts/:id
//! @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
});

//! @desc Update a contact
//! @route PUT api/contacts/:id
//! @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//! @desc Delete a contact
//! @route DELETE api/contacts/:id
//! @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
  }
  await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
