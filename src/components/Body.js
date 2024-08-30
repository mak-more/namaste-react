import BlogCard from "./BlogCard";
import blogObj from "../../utils/mockData";
import { blogObjectProd } from "../../utils/constant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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

  // const {blogsID, blogsCategory} = useParams();

  console.log("Body Render");
  
  useEffect (() => {
    console.log("Body useEffect called")
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(blogObjectProd); //API Call
    const json = await data.json();
    // console.log(blogObjectProd);
    
    //optional chaining
    setBlogList(json);
    setFilterSearch(json);
  };

  // Conditional Rendering
  // if (blogList.length === 0) {
  //   return <div className="container"><Shimmer /></div>
  // }

  const onlineStatus = useOnlineStatus()

  return (
    onlineStatus === false ?
    <div className="container mx-auto m-4"><h4>Please check your intenet connection</h4></div>
    :
    blogList?.length === 0 ?
      <div className="flex justify-between px-4"><Shimmer /></div>
    :
    <div className="container mx-auto m-4">
      <div className="flex justify-between my-4 align-middle" style={topMargin}>
        <div>
          <button className="px-3 py-1 bg-slate-300 rounded-lg" onClick={() => {
            const filterList = blogList.filter(
              (res) => res.timeToRead > 3
            );
            setFilterSearch(filterList);
          }}
          >Top Rankings</button>
        </div>
        <div className="search">
          <input type="text" className="border mx-2" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} placeholder="Search..." />
          <button className="px-3 py-1 text-white bg-blue-600 rounded-lg" onClick={() => {
            console.log(searchText);
            const filterSearch = blogList.filter(
              (res) => res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterSearch(filterSearch);
          }}>Search</button>
        </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {
        filterSearch.map((blogS)=>(
          //<Link to={"/blogs/" + blogsCategory + "/" + blogsID}>
            <BlogCard key={blogS.id} blogData={blogS} />
          //</Link>
        ))
      }
      </div>      
    </div> 
    
  )
}

export default Body;