import { blogObjDetailsProd } from "./constant";
import { useEffect, useState } from "react";

const useBlogDetails = (blogsID, blogsCategory) => {

  const [blogDetailsExpand, setBlogDetailsExpand] = useState(null);

  useEffect(() => {
    console.log("Blog DetailsExpand useEffect called");
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch (blogObjDetailsProd + blogsCategory + "/" + blogsID);
    const json = await data.json();
    setBlogDetailsExpand(json);
  };

  return blogDetailsExpand;

}

export default useBlogDetails;