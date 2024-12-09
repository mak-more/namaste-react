import Shimmer from "./Shimmer";
import  useBlogDetails  from "../../utils/useBlogDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const BlogDetails = () => {

  const {blogsID, blogsCategory} = useParams();
  /* console.log(useParams, '- useParams');
  console.log(blogsCategory, '- blogsCategory');
  console.log(blogsID, '- blogsID'); */

  const blogDetailsExpand = useBlogDetails(blogsID, blogsCategory); // Custom Hooks
  
  let htmlRef = useRef(null);

  useEffect(()=>{
    if (blogDetailsExpand?.blogDescripiton) {
      htmlRef.current.innerHTML = blogDetailsExpand?.blogDescripiton
    }
  },[blogDetailsExpand?.blogDescripiton])

  const navigate = useNavigate();

  return (
    blogDetailsExpand === null ?
      <Shimmer />
      :
    <div className="container mx-auto m-4">
      <p className="text-right font-bold">
        <Link onClick={() => navigate(-1)}>Back</Link>
      </p>
      <h2 className="font-bold text-xl">{blogDetailsExpand.title}</h2>
      <p className="mb-4" style={{"textAlign":"left"}}>{blogDetailsExpand.date}</p>
      <p className="mb-6"><img src={"https://cmsapi.tradebulls.in" + blogDetailsExpand.blogImg.url} alt="" /></p>
      <p ref={htmlRef}></p>
    </div>
  )
}

export default BlogDetails;