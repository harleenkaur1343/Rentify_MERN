const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "seller"],
  },
});

userSchema.statics.signup = async function (
  firstname,
  lastname,
  email,
  phone,
  role
) {
  //we use this keyword to refer to the current Model, if email already exists, then don't signup
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  const user = await this.create({
    email: email,
    phone: phone,
    role: role,
    firstname: firstname,
    lastname: lastname,
  });
  return user;
};

// Create the model from the schema
const User = mongoose.model("User", userSchema, "users");

// Export the model
module.exports = User;
