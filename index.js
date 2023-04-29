const express = require("express");
const dotenv = require("dotenv");
const contactRouter=require('./routes/contactRouter/contactRouter');
const errorHandler = require("./middleware/errorHandler/errorHandler");
const connectDb = require("./config/databaseConnection/dbConnection");
dotenv.config();
const app = express();
connectDb()
const port = process.env.PORT;
app.use(express.json()) 
app.use(errorHandler)
app.use("/api/contacts",contactRouter) 
app.listen(port, () => {
  console.log(`express server running on port ${port}`);
});
