import { videoDetailsProd , videoCategoryProd } from '../utils/constant';
import React, { useEffect, useState } from 'react';

const useVideoDetails = (videoId, videoCategory) => {
  
  const [videoDetailsExpand, setVideoDetailsExpand] = useState(null);

  useEffect(() => {
    console.log("Video DetailsExpand useEffect called");
    fetchVideoDetails();
  },[]);

  const fetchVideoDetails = async () => {
    const data = await fetch (videoDetailsProd + videoCategory + '/' + videoId);
    const json = await data.json();
    setVideoDetailsExpand(json);
  }
  
  return videoDetailsExpand;
}

export default useVideoDetails;
