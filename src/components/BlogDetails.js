import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const [blogDetailsExpand, setBlogDetailsExpand] = useState(null);
  // const {blogsID, blogsCategory} = useParams();
  const {params} = useParams();
  console.log(params);

  useEffect(() => {
    console.log("Blog DetailsExpand useEffect called");
    fetchData();
  },[]);

  const fetchData = async () => {
    // const data = await fetch ("https://uat-cmsapi.tradebulls.in/api/getBlogDetails/" + blogsCategory + "/" + blogsID);
    const data = await fetch ("https://uat-cmsapi.tradebulls.in/api/getBlogDetails/bonds-sgb/sovereign-gold-bond-scheme");
    const json = await data.json();
    console.log(json);
    setBlogDetailsExpand(json);
  };

  if (blogDetailsExpand === null) return <Shimmer />;

  return (
    <div className="container">
      <h2>{blogDetailsExpand.title}</h2>
      <p style={{"textAlign":"left"}}>{blogDetailsExpand.date}</p>
      <p><img src={"https://uat-cmsapi.tradebulls.in" + blogDetailsExpand.blogImg.url} alt="" /></p>
      <p>{blogDetailsExpand.blogDescripiton}</p>
    </div>
  )
}

export default BlogDetails;