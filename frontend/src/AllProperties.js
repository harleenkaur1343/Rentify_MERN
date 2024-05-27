import React from "react";
import { useState, useEffect } from "react";
import OneProp from "./OneProp";
import './AllProperties.css'

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/property/");
        if (response.ok) {
          const propertiesData = await response.json();
          setProperties(propertiesData);
          console.log(propertiesData);
        } else {
          console.error("Failed to fetch properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

//   const allprops = properties
//     ? properties.map((property) => {
//         <OneProp key={property._id} propertyval={property} />;
//       })
//     : "No properties to display";
  return (
    <div className="properties-page">
      <h2 style={{textAlign:"center"}}>All Properties</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property._id} className="property">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            {/* Add more property details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
