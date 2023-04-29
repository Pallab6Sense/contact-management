const express = require("express");
const dotenv = require("dotenv");
const contactRouter=require('./routes/contactRouter/contactRouter')
dotenv.config();
const app = express();

const port = process.env.PORT;


app.use("/api/contacts",contactRouter) 
app.listen(port, () => {
  console.log(`express server running on port ${port}`);
});
