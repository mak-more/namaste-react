import React, { useEffect, useState } from 'react';
import { tags, languages, videoLeftMenus, TB_STRAPI_URL } from '../../utils/constant';
import VideoContainer from './VideoContainer';
import Shimmer from './Shimmer';

const Videos = () => {

  const [isActiveMenu, setIsActiveMenu] = useState([]);
  const [categoryVideo, setCategoryVideo] = useState([]);
  const [allData,setAllData] = useState([]);

  useEffect (()=>{
    fetchCategoryVideo();
  },[])

  const fetchCategoryVideo = async()=>{
    const data = await fetch (TB_STRAPI_URL + '/api/getAllVideoData')
    const json = await data.json()
    setAllData(json)
    setCategoryVideo(json);
  }
  console.log(categoryVideo, 'categoryVideo')
  console.log(allData, 'allData')

  const handleClickLeftMenu = (indexVideo) => {
    setIsActiveMenu(indexVideo)
    const url = indexVideo.split('/')[2]
    console.log(indexVideo.split('/'), 'split url')

    const data = url ? allData.filter ((item)=>item.url.split('/')[1] === url) : allData
    setCategoryVideo(data) 
    console.log(indexVideo,data,'indexVideo, data')
  }

  const handleLanguageSelect = (e) => {
    const langSelect = e.target.value
    const langSelected = allData.filter ((item)=>item.language === langSelect)
    setCategoryVideo(langSelect === 'All' ? allData : langSelected)
  }
  
  return (
    <div className='container mx-auto my-4 '>
      <div className='grid grid-flow-col'>
        <div className='col-span-12'>
          <div className='text-center'>
              {
                tags?.map((tagName, index) => (
                  <span className='mr-3 font-semibold text-blue-600' key={index}>#{tagName}</span>
                ))
              }
          </div>
        </div>
      </div>

      <div className='grid grid-flow-col mt-4'>
        <div className='col-span-1 mr-6 mb-4'>
          <ul className='text-xl shadow-lg' style={{position:'sticky', top:'75px'}}>
            {
              videoLeftMenus?.map((menuName, indexVideo) => (
                <li key={indexVideo} className={(isActiveMenu === (menuName.identifier)) ? 'px-4 py-2 border-b-2 cursor-pointer bg-slate-500 text-white' : 'px-4 py-2 border-b-2 cursor-pointer hover:bg-slate-300'} onClick={() => {
                  handleClickLeftMenu(menuName.identifier)
                  }}>{menuName.name}</li>
              ))
            }
          </ul>
        </div>
        <div className='col-span-12 pl-6'>
          <div className='flex justify-between'>
            <div><h4>Title</h4></div>
            <select onChange={handleLanguageSelect}>
              {
                languages?.map((options, indexLang) => (
                  <option key={indexLang} value={options}>{options}</option>
                ))
              }
            </select>
          </div>

          <div>
            {
              categoryVideo?.length === 0 ?
              <Shimmer /> :
              <VideoContainer videoData={categoryVideo} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
