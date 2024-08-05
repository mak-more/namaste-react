const styleBlogCard = { //javascript use for styling 
  backgroundColor: '#eee',
  border: '1px solid #666',
}

const BlogCard = (props) => {
  const {blogData} = props;
  return (
    <div className="blog-card" style={styleBlogCard}>
      <div className="blog-img">
        <img src={"https://uat-cmsapi.tradebulls.in" + blogData.imgUrl} alt="Blog Img" width="184" height="150" />
      </div>    
      <h4>{blogData.title}</h4>
      <h5>{blogData.blogShortDesc}</h5>
      <div className="d-flex blog-ratings">
        <div className="col-2">{blogData.date}</div>
        <div className="col-2">{blogData.timeToRead} min Read</div>
      </div>
    </div>
  )
}

export default BlogCard;