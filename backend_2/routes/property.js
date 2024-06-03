const express = require("express");
const {
    addProperty,
    viewAllProperties,
    getSellerProperties,
    updateProperty,
    deleteProperty
} = require("../controllers/propertyController");
const router = express.Router();


router.post("/addproperty", addProperty);
router.get('/',viewAllProperties);
router.get('/my_properties',getSellerProperties)
router.delete('/properties/:id', deleteProperty);
router.put('/properties/:id', updateProperty);

module.exports = router;