import React, { useContext, useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import BlogCard, { withColorCode } from './BlogCard';
import { blogObjectProd, blogColorCode } from "../../utils/constant";
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/userContext';

const TbBlogs = () => {

  // Local Use State React Variable - Super powerful Variable
  const [blogList, setBlogList] = useState([]);
  const [topRank, setTopRank] = useState([]);
  const [searchText, setSearchText] = useState('');

  const {loggedInUser, setUserName} = useContext(UserContext);

  const onlineStatus = useOnlineStatus(); // Custom Hooks

  const CardColorCode =  withColorCode(BlogCard);

  // Whenever State Variables update, react triggers and re-render the component
  console.log("Tb Blogs Render");
  
  useEffect (() => {
    console.log("Tb Blogs useEffect called")
    fetchData();
  },[])

  const fetchData = async() => {
    const data = await fetch(blogObjectProd);
    const json = await data.json();
    // console.log(blogObjectProd);
    setBlogList(json);
    setTopRank(json);
  }  

  const handleTopRankBtn = () => {
    const rankList = blogList.filter (
      (res)=>res.timeToRead >= 4
    )
    setTopRank(rankList)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }  

  const handleSearchText = (e)=> {
    {setSearchText(e.target.value)}
  }

  const handleSearchBtn = () => {
    const searchBtn = blogList.filter (
       (res)=>res.title.toLowerCase().includes(searchText.toLowerCase())
     )
     setTopRank(searchBtn)
   }

  const handleColorSelect = (e) => {
    const selectColor = e.target.value
    const colorResult = blogList.filter ((res)=>res.catColorCode === selectColor)
    setTopRank(selectColor == 'Select Colour' ? blogList : colorResult);
  }

  return (
    <>
    {
      onlineStatus === false ?
    <div className="container mx-auto m-4"><h4>Please check your intenet connection</h4></div>
      : blogList?.length === 0 ?
    <div className="flex justify-between px-4"><Shimmer /></div>      
      :
    <div className="container mx-auto m-4">
      <div className="flex justify-between my-4 align-middle" style={{marginTop: '20px'}}>
        <div>
          <button className='px-3 py-1 bg-slate-300 rounded-lg' onClick={handleTopRankBtn}>Top Rankings</button>
          <label className='ml-8 font-bold'>User :</label>
          <input className='border-2 border-slate-300 mx-2 p-1' placeholder='User Name' value={loggedInUser} onChange={handleUserName} />
        </div>

        <div>
          <select className='mr-5 p-1 border-2' onChange={handleColorSelect}>
            {
              blogColorCode?.map((colorCode, index)=>(
                <option key={index} value={colorCode.name}>{colorCode.name}</option>
              ))
            }
          </select>
          <input className='border-2 border-slate-300 mx-2 p-1' type='text' placeholder='Search...' value={searchText} onChange={handleSearchText} />
          <button className='px-3 py-1 text-white bg-blue-600 rounded-lg' onClick={handleSearchBtn}>Search</button>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {
        topRank?.map((blogS, index)=>(
          blogS.catColorCode ? (
            <CardColorCode key={index} blogData={blogS} />
          ) : (
          <BlogCard key={index} blogData={blogS} />
        )
        ))
      }
      </div>
    </div>
    }
    </>
  );
}

export default TbBlogs;
