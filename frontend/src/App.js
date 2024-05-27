import HomePage from "./Homepage";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Signup_Buyer from "./Signup_Buyer";
import Signup_Seller from "./Signup_Seller";
import AllProperties from "./AllProperties";
import Seller_Profile from "./Seller_Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup_seller" element={<Signup_Seller />} />
          <Route path="/signup_buyer" element={<Signup_Buyer />} />
          <Route path="/properties" element={<AllProperties/>} />
          <Route path="/seller_profile" element={<Seller_Profile/>} />

          {/* <Route
              path="/home"
              element={user?<Home/>:<Navigate to="/login"/>}
            /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
