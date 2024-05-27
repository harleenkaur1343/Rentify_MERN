import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <img
          src="https://images.pexels.com/photos/3935328/pexels-photo-3935328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Banner"
        />
        <div className="overlay"></div>
        <div className="signup-options">
          <h2>Find Your Perfect Home</h2>
          <p>Sign up now to browse through thousands of rental listings.</p>
          <div className="buttons">
            <Link to="/signup_seller" className="btn btn-primary">
              Sign Up as Seller
            </Link>
            <Link to="/signup_buyer" className="btn btn-secondary">
              Sign Up as Buyer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
