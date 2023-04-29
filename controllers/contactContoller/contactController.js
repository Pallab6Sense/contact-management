//! @desc Create a contact
//! @route POST api/contacts
//! @access public
const createContact = (req, res) => {
  res.status(201).json({ message: "create contact" });
};

//! @desc Get all contacts
//! @route GET api/contacts
//! @access public
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "get all contact" });
};

//! @desc Get a contact
//! @route GET api/contacts/:id
//! @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//! @desc Update a contact
//! @route PUT api/contacts/:id
//! @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//! @desc Delete a contact
//! @route DELETE api/contacts/:id
//! @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
