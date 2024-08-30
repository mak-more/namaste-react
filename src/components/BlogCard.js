import { Link } from "react-router-dom";

const styleBlogCard = { //javascript use for styling 
  // backgroundColor: '#eee',
  border: '1px solid #666',
}

const BlogCard = (props) => {
  const {blogData} = props;
  // console.log(blogData);
  return (
    <Link to={"blogs" + blogData.url} className="flex flex-wrap items-center justify-around p-2 bg-gray-200 hover:bg-gray-300" style={styleBlogCard}>
      <div>
        <img src={"https://cmsapi.tradebulls.in" + blogData.imgUrl} alt="Blog Img" className="h-32" width="" height="" />
      </div>    
      <h4 className="font-bold">{blogData.title}</h4>
      <h5>{blogData.blogShortDesc}</h5>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="col-2">{blogData.date}</div>
        <div className="col-2">{blogData.timeToRead} min to read</div>
      </div>
    </Link>
  )
}

export default BlogCard;