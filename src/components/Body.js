import BlogCard from "./BlogCard";
import blogObj from "../../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const topMargin = { //javascript use for styling 
  marginTop: '20px',
}

const Body = () => {

  // Normal JS Variable
  // let blogList = [ // Normal JS Variable
  //   {
  //     "id": "1",
  //     "title": "Everything You Need to Know About Sovereign Gold Bond Scheme",
  //     "timeToRead": "3",
  //     "blogShortDesc": "In the dynamic world of investments, gold remains a timeless treasure, valued for its enduring appeal and intrinsic worth.",
  //     "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/Sovereign_Gold_Bonds_Your_Ultimate_Guide_c6eb10424f.svg",
  //     "imgAlt": "",
  //     "blogRatings": "4.5"
  //   },
  //   {
  //     "id": "2",
  //     "title": "Sovereign Gold Bond vs. Gold Mutual Funds vs Gold ETF : A Comparison",
  //     "timeToRead": "5",
  //     "blogShortDesc": "India, a nation renowned for its deep-rooted fascination with gold, is witnessing a significant shift in the way its...",
  //     "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/SGB_vs_Gold_ETF_vs_Gold_MF_A_Comparison_fc0f4eb89d.svg",
  //     "imgAlt": "",
  //     "blogRatings": "4.2"
  //   },
  //   {
  //     "id": "3",
  //     "title": "8 Vital Do’s and Dont’s of Investing Responsibly in the Stock Market",
  //     "timeToRead": "2",
  //     "blogShortDesc": "Investing in the stock market is an exciting endeavor that can help you grow your wealth over time.",
  //     "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/Stock_Market_Investing_8_Vital_Do_s_and_Don_ts_bdceb725ed.svg",
  //     "imgAlt": "",
  //     "blogRatings": "3.3"
  //   }
  // ];
  

  // Local State React Variable - Super powerful Variable
  // const [blogList, setBlogList] = useState(blogObj); // Local State React Variable - Super powerful Variable

  const [blogList, setBlogList] = useState([]); // Local State React Variable - Super powerful Variable
  const [filterSearch, setFilterSearch] = useState ([]); // Local State React Variable - Super powerful Variable
  const [searchText, setSearchText] = useState(""); // Local State React Variable - Super powerful Variable

  console.log("Body Render");
  
  useEffect (() => {
    console.log("Use Effect called")
    fetchData();    
  },[])

  const fetchData = async () => {
    const data = await fetch("https://uat-cmsapi.tradebulls.in/api/getAllBlogList");
    const json = await data.json();
    
    //optional chaining
    setBlogList(json);
    setFilterSearch(json);
  };

  // Conditional Rendering
  // if (blogList.length === 0) {
  //   return <div className="container"><Shimmer /></div>
  // }

  return blogList.length === 0 ? (
    <div className="container"><Shimmer /></div>
    ) : (
    <div className="container">      
      <div className="filter" style={topMargin}>        
        <div>
          <button className="btn-filter" onClick={() => {
            const filterList = blogList.filter(
              (res) => res.timeToRead > 3
            );
            setFilterSearch(filterList);
          }}
          >Top Rankings</button>
        </div>
        <div className="search-bar">
          <input type="text" className="" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} placeholder="Search..." />
          <button onClick={() => {
            console.log(searchText);
            const filterSearch = blogList.filter(
              (res) => res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterSearch(filterSearch);
          }}>Search</button>
        </div>
      </div>
      <div className="blog-container">
      {
        filterSearch.map((blogS)=>(
          <BlogCard key={blogS.id} blogData={blogS} />
        ))
      }
      </div>      
    </div>    
  )
}

export default Body;