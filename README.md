# Home Rental Website

This project is a home rental website built with React, Express, and MongoDB. The application allows users to register as either buyers or sellers. Sellers can list their properties, and users can view seller profiles and properties.

## Features

- User Registration (Buyer/Seller)
- Seller Profile
- List of Properties

## Technologies Used

- React
- React Router
- Express
- MongoDB
- Mongoose
- JavaScript

### Prerequisites

- Node.js
- MongoDB

## Database Collections and Documents
-Users Collection
{
  "_id": {
    "$oid": "66533094892cfb147a24fffd"
  },
  "firstname": "Jiya",
  "lastname": "Goel",
  "email": "jiyagoel@gmail.com",
  "phone": 1234567890,
  "role": "buyer"
},
{
  "_id": {
    "$oid": "6653422d140e375f535d4bf3"
  },
  "firstname": "Arshi",
  "lastname": "Gupta",
  "email": "arshi@gmail.com",
  "phone": "0987654321",
  "role": "seller",
  "__v": 0
},
{
  "_id": {
    "$oid": "66535d65e95b93517ebc5cc0"
  },
  "firstname": "Goyam",
  "lastname": "Jain",
  "email": "goyamjain@gmail.com",
  "phone": "1234546711",
  "role": "buyer",
  "__v": 0
}

-Properties Collection
{
  "_id": {
    "$oid": "66534a7b855d6d5d62eb6ed8"
  },
  "seller": {
    "$oid": "609c4b4c9a5bc99ebfd7e63f"
  },
  "title": "Modern Apartment with Stunning Views",
  "description": "Beautifully designed apartment with panoramic views of the city skyline.",
  "price": 250000,
  "address": "123 Main Street",
  "city": "New York",
  "state": "NY",
  "zipCode": "10001",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 1200,
  "__v": 0
}

