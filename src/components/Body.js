import BlogCard from "./BlogCard";
import blogObj from "../../utils/mockData";

const filterTopMargin = { //javascript use for styling 
  marginTop: '20px',
}

const blogList = [
  {
    "id": "1",
    "title": "Everything You Need to Know About Sovereign Gold Bond Scheme",
    "timeToRead": "3",
    "blogShortDesc": "In the dynamic world of investments, gold remains a timeless treasure, valued for its enduring appeal and intrinsic worth.",
    "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/Sovereign_Gold_Bonds_Your_Ultimate_Guide_c6eb10424f.svg",
    "imgAlt": "",
    "blogRatings": "4.5"
  },
  {
    "id": "2",
    "title": "Sovereign Gold Bond vs. Gold Mutual Funds vs Gold ETF : A Comparison",
    "timeToRead": "5",
    "blogShortDesc": "India, a nation renowned for its deep-rooted fascination with gold, is witnessing a significant shift in the way its...",
    "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/SGB_vs_Gold_ETF_vs_Gold_MF_A_Comparison_fc0f4eb89d.svg",
    "imgAlt": "",
    "blogRatings": "4.2"
  },
  {
    "title": "8 Vital Do’s and Dont’s of Investing Responsibly in the Stock Market",
    "timeToRead": "2",
    "blogShortDesc": "Investing in the stock market is an exciting endeavor that can help you grow your wealth over time.",
    "imgUrl": "https://uat-cmsapi.tradebulls.in/uploads/Stock_Market_Investing_8_Vital_Do_s_and_Don_ts_bdceb725ed.svg",
    "imgAlt": "",
    "blogRatings": "3.3"
  }
];

const Body = () => {
  return (
    <div className="container">
      <div className="search-bar">Search</div>
      <div className="filter" style={filterTopMargin}>
        <button className="btn-filter"
        onClick={() => {
          console.log('Button Clicked');
          blogList = blogList.filter(
            (res) => res.avgRating > 4
          );
        }}
        >Top Rankings</button>
      </div>
      <div className="blog-container">
      {
        blogObj?.map((item , index)=>(
          <BlogCard key={index.id} blogData={item} />
        ))
      }
      </div>
    </div>    
  )
}

export default Body;