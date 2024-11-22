import BlogCard, {withColorCode} from "./BlogCard";
import blogObj from "../../utils/mockData";
import { blogObjectProd } from "../../utils/constant";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";
import User from "./User";

const topMargin = { //javascript use for styling 
  marginTop: '20px',
}

const Body = () => {

  // Local State React Variable - Super powerful Variable
  // const [blogList, setBlogList] = useState(blogObj); // Local State React Variable - Super powerful Variable

  const [blogList, setBlogList] = useState([]); // Local State React Variable - Super powerful Variable
  const [filterSearch, setFilterSearch] = useState ([]); // Local State React Variable - Super powerful Variable
  const [searchText, setSearchText] = useState(""); // Local State React Variable - Super powerful Variable

  const BlogColorCode = withColorCode(BlogCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  // const {blogsID, blogsCategory} = useParams();
  
  
  // Whenever State Variables update, react triggers and re-render the component
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

  // let sorted=filterSearch.filter(item =>item.catColorCode == "Red")

  // Conditional Rendering
  // if (blogList.length === 0) {
  //   return <div className="container"><Shimmer /></div>
  // }

  const onlineStatus = useOnlineStatus(); // Custom Hooks

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
            <label className="ml-8 font-bold">User : </label>
            <input className="border-2 border-slate-300 mx-2 p-1" placeholder="User Name" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
        </div>
        <div className="search">
          <input type="text" className="border-2 border-slate-300 mx-2 p-1" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} placeholder="Search..." />
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
          blogS.catColorCode && blogS.catColorCode == "Red" ? (
            <BlogColorCode blogData={blogS} />
            ) : (
              <BlogCard key={blogS.id} blogData={blogS} />
              )
        ))
      }
      {/* {
        sorted.map((blogS)=>(
          <BlogColorCode blogData={blogS} />
        ))
      } */}
      </div>      
    </div> 
    
  )
}

export default Body;