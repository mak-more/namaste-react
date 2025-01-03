import React from 'react';
import useVideoDetails from '../../utils/useVideoDetails';
import { Link, useNavigate, useParams } from 'react-router-dom';

const VideoDetails = () => {

  const {videoId, videoCategory} = useParams();

  const videoDetailsExpand = useVideoDetails(videoId, videoCategory); // Custom Hooks

  const navigate = useNavigate();

  return (    
    <div className="container mx-auto m-4">
      <div>
        <p className="text-right font-bold">
          <Link onClick={() => navigate(-1)}>Back</Link>
        </p>
      </div>
      <div className="video-container">
        <div className="video-container__img-wrap">
          <img src={TB_STRAPI_URL+videoDetailsExpand.thumbnail} className="" alt="" width="640" height="360" />
          <div className="video-length">{videoDetailsExpand.videoLength}</div>
        </div>
        <div className="video-container__content-wrap">
          <h5 className="video-container__title">{videoDetailsExpand.title}</h5>
          <h5 className="video-container__author">{videoDetailsExpand.author}</h5>
          <p className="video-container__date">{videoDetailsExpand.date}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
