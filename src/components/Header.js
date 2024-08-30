import {logoUrl} from "../../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-md px-4 py-4">
      <div className="w-60"><img src={logoUrl} alt="Logo" className="" width="340" height="70" /></div>
      <div className="nav-items">
        <ul className="flex">
          <li className="p-2">{onlineStatus ? "Online" : "Offline"}</li>
          <li className="p-2"><Link to="/" title="Home">Home</Link></li>
          <li className="p-2"><Link to="/about" title="About Us">About Us</Link></li>
          <li className="p-2"><Link to="/contact" title="Contact Us">Contact Us</Link></li>
          <li className="p-2"><Link to="/grocery" title="Grocery">Grocery</Link></li>
          <li className="p-2"><button title="" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName);
            }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;