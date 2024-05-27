const { Error } = require("mongoose");
const User = require("../models/userModel");

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   //to catch the existing user error

//   try {
//     const user = await User.login(email, password);
//     //create a token
//     //const token = createToken(user._id);
//     res.status(200).json({ _id: user._id, name: user.name, email });
//     console.log(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//     console.log(error.message);
//   }
// };

const signupUser = async function (req, res) {
  const { firstname, lastname, email, phone, role } = req.body;
  console.log(phone);
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
const oneSeller = async (req,res) =>{
    const sellerId = req.params.id;
    try {
        const seller = await User.findById(sellerId);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.json(seller);
    } catch (error) {
        console.error('Error finding seller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
} 

module.exports = {
  signupUser,
  allUsers,
  oneSeller
};
