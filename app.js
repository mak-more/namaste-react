import React from "react";
import ReactDOM from "react-dom/client";
import Styles from "./style.css";

/* Components:
Header
  - Logo, Nav
Body
  - Search
  - Blog Container
    - Blog Card
      - Img, Blog Name, Ratings, time, etc.
Footer
  - Copyright, Links, Address, Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo"><img src="https://www.tradebulls.in/images/tradebulls-logo.svg" alt="Logo" className="" width="340" height="70" /></div>
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

const styleBlogCard = { //javascript use for styling 
  backgroundColor: '#eee',
  border: '1px solid #666',
}

const BlogCard = (props) => {
  const {blogData} = props;
  return (
    <div className="blog-card" style={styleBlogCard}>
      <div className="blog-img">
        <img src={blogData.imgUrl} alt="Blog Img" width="184" height="150" />
      </div>    
      <h4>{blogData.title}</h4>
      <h5>{blogData.blogShortDesc}</h5>
      <div className="d-flex blog-ratings">
        <div className="col-2">{blogData.blogRatings} ratings</div>
        <div className="col-2">{blogData.timeToRead} min Read</div>
      </div>
    </div>
  )
}

const blogObj = [
  {
    "title": "Everything You Need to Know About Sovereign Gold Bond Scheme",
    "timeToRead": "3",
    "blogShortDesc": "In the dynamic world of investments, gold remains a timeless treasure, valued for its enduring appeal and intrinsic worth.",
    "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/Sovereign_Gold_Bonds_Your_Ultimate_Guide_c6eb10424f.svg",
    "imgAlt": "",
    "blogRatings": "4.5"
  },
  {
    "title": "Sovereign Gold Bond vs. Gold Mutual Funds vs Gold ETF : A Comparison",
    "timeToRead": "5",
    "blogShortDesc": "India, a nation renowned for its deep-rooted fascination with gold, is witnessing a significant shift in the way its...",
    "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/SGB_vs_Gold_ETF_vs_Gold_MF_A_Comparison_fc0f4eb89d.svg",
    "imgAlt": "",
    "blogRatings": "4.2"
  },
];

const Body = () => {
  return (
    <div className="container">
      <div className="search-bar">Search</div>
      <div className="blog-container">
      {
        blogObj?.map((item , index)=>(
          <BlogCard blogData={item} />
        ))
      }
      </div>
    </div>    
  )
}


const Footer = () => {
  return (
    <div className="footer"></div>
  )
}

const AppLayout = () => {
  return  (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />) //Render React Functional Component
