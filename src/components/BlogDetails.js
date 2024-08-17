import Shimmer from "./Shimmer";
import { blogObjDetailsProd } from "../../utils/constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const [blogDetailsExpand, setBlogDetailsExpand] = useState(null);
  const {blogsID, blogsCategory} = useParams();
  // const {params} = useParams();
  console.log(blogsID);  

  useEffect(() => {
    console.log("Blog DetailsExpand useEffect called");
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch (blogObjDetailsProd + blogsCategory + "/" + blogsID);
    const json = await data.json();
    setBlogDetailsExpand(json);
  };

  if (blogDetailsExpand === null) return <Shimmer />;

  return (
    <div className="container">
      <h2>{blogDetailsExpand.title}</h2>
      <p style={{"textAlign":"left"}}>{blogDetailsExpand.date}</p>
      <p><img src={"https://cmsapi.tradebulls.in" + blogDetailsExpand.blogImg.url} alt="" /></p>
      <p>{blogDetailsExpand.blogDescripiton}</p>
    </div>
  )
}

export default BlogDetails;