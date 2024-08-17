import { Link } from "react-router-dom";

const styleBlogCard = { //javascript use for styling 
  backgroundColor: '#eee',
  border: '1px solid #666',
}

const BlogCard = (props) => {
  const {blogData} = props;
  // console.log(blogData);
  return (
    <Link to={"blogs" + blogData.url} className="blog-card" style={styleBlogCard}>
      <div className="blog-img">
        <img src={"https://cmsapi.tradebulls.in" + blogData.imgUrl} alt="Blog Img" width="" height="" />
      </div>    
      <h4>{blogData.title}</h4>
      <h5>{blogData.blogShortDesc}</h5>
      <div className="d-flex blog-ratings">
        <div className="col-2">{blogData.date}</div>
        <div className="col-2">{blogData.timeToRead} min to read</div>
      </div>
    </Link>
  )
}

export default BlogCard;