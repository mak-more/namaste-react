import Shimmer from "./Shimmer";
import  useBlogDetails  from "../../utils/useBlogDetails";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const {blogsID, blogsCategory} = useParams();
  console.log(useParams);
  console.log(blogsCategory);
  console.log(blogsID);

  const blogDetailsExpand = useBlogDetails(blogsID, blogsCategory);

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