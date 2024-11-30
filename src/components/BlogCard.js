import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const styleBlogCard = { //javascript use for styling 
  // backgroundColor: '#eee',
  border: '1px solid #666',
}
const truncate = (str, len) => str?.slice?.(0, len);

const BlogCard = (props) => {
  const {blogData} = props;
  const {loggedInUser} = useContext(UserContext);
  // console.log(blogData);

  const dispatch = useDispatch();
  const handleAddItem = (blogData) => {
    // dispatch action
    dispatch(addItem(blogData));
  };

  return (    
    // <Link to={"blogs" + blogData.url} className="relative flex flex-wrap items-center justify-around p-2 bg-gray-200 hover:bg-gray-300 z-0" style={styleBlogCard}>
    <>
    <div className="relative flex flex-wrap items-center justify-around p-2 h-full bg-gray-200 hover:bg-gray-300 z-0" style={styleBlogCard}>
      <div>
        <img src={"https://cmsapi.tradebulls.in" + blogData.imgUrl} alt="Blog Img" className="h-32" width="" height="" />
      </div>    
      <h4 className="font-bold text-center my-2">{truncate(blogData.title,50)+'...'}</h4>
      <p className="text-justify mb-3">{truncate(blogData.blogShortDesc,100)+'...'}<br/><Link to={"blogs" + blogData.url} className="font-semibold text-center inline-block my-2 px-2 py-1 text-white bg-blue-600 rounded-md">Read More</Link></p>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="font-semibold">{blogData.date}</div>
        <div className="font-semibold">{blogData.timeToRead} min to read</div>
      </div>
      <h6><span className="font-semibold">User:</span> {loggedInUser}</h6>
      <div className="absolute top-0 right-0 z-30">
        <button className="px-3 py-1 text-white bg-slate-600 rounded-lg" onClick={() => handleAddItem(blogData)}>Add</button>
      </div>
    </div>
    </>
    // </Link>
  )  
};

//Higher Order Component use to enhance the "<BlogCard/> component": BlogCard => BlogColorCode
export const withColorCode = (BlogCard) => {
  return (props) => {
    const {blogData} = props;
    const bgColor = (blogData.catColorCode)?.toLowerCase();
    const classColor = bgColor.replace(' ', '-');
    return (
      <div className="relative">
        <h4 className={`absolute py-1 px-2 text-sm text-white font-bold rounded-br-lg z-30 ${classColor}`}>{blogData?.catColorCode}</h4>
         <BlogCard {...props}/> {/* {...props} means Spread Data - all props data will appear here */}
      </div>
    );
  };
};

export default BlogCard;