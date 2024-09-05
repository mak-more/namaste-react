import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";

const styleBlogCard = { //javascript use for styling 
  // backgroundColor: '#eee',
  border: '1px solid #666',
}
const truncate = (str, len) => str?.slice?.(0, len);

const BlogCard = (props) => {
  const {blogData} = props;
  const {loggedInUser} = useContext(UserContext);
  // console.log(blogData);
  return (
    <Link to={"blogs" + blogData.url} className="flex flex-wrap items-center justify-around p-2 bg-gray-200 hover:bg-gray-300" style={styleBlogCard}>
      <div>
        <img src={"https://cmsapi.tradebulls.in" + blogData.imgUrl} alt="Blog Img" className="h-32" width="" height="" />
      </div>    
      <h4 className="font-bold text-center my-2">{truncate(blogData.title,50)+'...'}</h4>
      <p className="text-justify mb-3">{truncate(blogData.blogShortDesc,100)+'...'}</p>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="font-semibold">{blogData.date}</div>
        <div className="font-semibold">{blogData.timeToRead} min to read</div>
      </div>
      <h6><span className="font-semibold">User:</span> {loggedInUser}</h6>
    </Link>
  )  
};

//Higher Order Component means: input - BlogCard => BlogColorCode
export const withColorCode = (BlogCard) => {
  return (props) => {
    const {blogData}=props
    return (
      <div>
        <h4 className="absolute bg-red-600 text-white p-1 text-sm rounded-br-lg">{blogData?.catColorCode}</h4>
        <BlogCard {...props}/>
      </div>
    );
  };
};

export default BlogCard;