import { TB_STRAPI_URL } from '../../utils/constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const VideoContainer = (props) => {
  console.log(props)

  const {videoData} = props;
  console.log(videoData)

  return (
    <div className='grid gap-4 grid-cols-4 mt-5'>
    {
      videoData?.map((video, index)=>(
      <div className='border' key={index}>
      <Link to={'/videos' + video.url}>
        <div className="video-container">
          <div className="video-container__img-wrap">
            <img src={TB_STRAPI_URL+video.thumbnail} className="" alt="" width="640" height="360" />
            <div className="video-length">{video.videoLength}</div>
          </div>
          <div className="video-container__content-wrap">
            <h5 className="video-container__title">{video.title}</h5>
            <h5 className="video-container__author">{video.author}</h5>
            <p className="video-container__date">{video.date}</p>
          </div>
        </div>
        </Link>
      </div>
      ))
    }      
    </div>
  );
}

export default VideoContainer;
