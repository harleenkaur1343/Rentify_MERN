const { Error } = require("mongoose");
const User = require("../models/userModel");

const signupUser = async function (req, res) {
  const { firstname, lastname, email, phone, role } = req.body;

  //to catch the existing user error
  const exists = await User.findOne({ email: email });
  if (exists) {
    throw Error("Email already exists");
  }
  try {
    const user = await User.create({
      email: email,
      phone: phone,
      role: role,
      firstname: firstname,
      lastname: lastname,
    });
    res.status(200).json({ _id: user._id, name: user.name, email });
    console.log(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const oneSeller = async (req, res) => {
  const sellerId = req.body.sellerId;
  try {
    const seller = await User.findById(sellerId);
    console.log(seller + "id");

    if (seller.id && seller.role === "seller") {
      res.json(seller);
    }
    return res.status(404).json({ error: "Seller not found" });
  } catch (error) {
    console.error("Error finding seller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signupUser,
  allUsers,
  oneSeller,
};
