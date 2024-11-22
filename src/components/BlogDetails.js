import Shimmer from "./Shimmer";
import  useBlogDetails  from "../../utils/useBlogDetails";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const {blogsID, blogsCategory} = useParams();
  console.log(useParams, '- useParams');
  console.log(blogsCategory, '- blogsCategory');
  console.log(blogsID, '- blogsID');

  const blogDetailsExpand = useBlogDetails(blogsID, blogsCategory); // Custom Hooks

  if (blogDetailsExpand === null) return <Shimmer />;

  return (
    <div className="container mx-auto m-4">
      <h2 className="font-bold text-xl">{blogDetailsExpand.title}</h2>
      <p style={{"textAlign":"left"}}>{blogDetailsExpand.date}</p>
      <p><img src={"https://cmsapi.tradebulls.in" + blogDetailsExpand.blogImg.url} alt="" /></p>
      <p>{blogDetailsExpand.blogDescripiton}</p>
    </div>
  )
}

export default BlogDetails;