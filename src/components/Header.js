import {logoUrl} from "../../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"><img src={logoUrl} alt="Logo" className="" width="340" height="70" /></div>
      <div className="nav-items">
        <ul>
          <li><a href="" title="">Home</a></li>
          <li><a href="" title="">About Us</a></li>
          <li><a href="" title="">Contact Us</a></li>
          <li><a href="" title="">Cart</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;