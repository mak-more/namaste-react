import {logoUrl} from "../../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Render");

  // If dependancy array is empty => useEffect is called on initial render (just once)
  useEffect(()=>{
    console.log("Header useEffect called just once");
  },[])

  // If dependancy array is [btnName] => useEffect is called on every render of [btnName]
  useEffect(()=>{
    console.log("Header [btnName] useEffect called on every render");
  },[btnName])

  return (
    <div className="header">
      <div className="logo"><img src={logoUrl} alt="Logo" className="" width="340" height="70" /></div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" title="Home">Home</Link></li>
          <li><Link to="/about" title="About Us">About Us</Link></li>
          <li><Link to="/contact" title="Contact Us">Contact Us</Link></li>
          <li><Link to="/cart" title="Cart">Cart</Link></li>
          <li><button title="" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName);
            }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;