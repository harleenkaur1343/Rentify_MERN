const express = require("express");

const app = express();

// to display a static file on the server

//app.use(express.static("static"));

const userRoutes = require("./backend/routes/user");
const propertyRoutes = require("./backend/routes/property");
const db = require("./backend/config/db");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error(err));

app.use("/",(req,res)=>{
  res.send("This is a test link for rentify app");
});
app.use("/user", userRoutes);
app.use("/property", propertyRoutes);

app.listen(5000, function () {
  console.log("the server is running on the port 5000");
});
