const { Error } = require("mongoose");
const Property = require("../models/propertyModel");

const addProperty = async function (req, res) {
  const {
    seller,
    title,
    description,
    price,
    address,
    city,
    state,
    country,
    zipCode,
    bedrooms,
    bathrooms,
    area,
  } = req.body;

  //to catch the existing user error

  try {
    const property = await Property.create({
      seller,
      title,
      description,
      price,
      address,
      city,
      state,
      country,
      zipCode,
      bedrooms,
      bathrooms,
      area,
    });
    res.status(200).json({ _id: property._id, title: property.title, address});
    console.log(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
};

const getSellerProperties = async (req, res) => {
    const seller = req.body.seller;
    try {
        const properties = await Property.find({ seller: seller });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error:error.message});
    }
};

const deleteProperty = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        console.error('Error deleting property:', error);
    }
};

const updateProperty = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(updatedProperty);
    } catch (error) {
        console.error('Error updating property:', error);
    }
};

const viewAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({});
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addProperty,
  viewAllProperties,
  getSellerProperties,
};
