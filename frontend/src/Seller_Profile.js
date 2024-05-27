import React, { useState, useEffect } from "react";

const Seller_Profile = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchUsers = async (sellerId) => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/seller/sellerId=${sellerId}`
        );
        if (response.ok) {
          const usersData = await response.json();
          // Filter users to get only sellers
          const sellerUsers = usersData.filter(
            (user) => user.role === "seller"
          );
          setSellers(sellerUsers);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="properties-page">
      <h2>Seller Info</h2>
      <ul>
        {sellers.map((seller) => (
          <li key={seller._id}>
            {seller.firstName} {seller.lastName} ({seller.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seller_Profile;
