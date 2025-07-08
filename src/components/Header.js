import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login")

  useEffect(()=>{
  console.log("useEffect called"); 
 }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>Cart</li>
          <li><button onClick={()=>{ btnName === "Login"?setBtnName("LogOut"):setBtnName("Login") }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;