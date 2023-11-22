import { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
    getPopularVideos();
  },[])

  const getPopularVideos = async() => {
    try{
      const response = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
      if(!response.ok){
        const error = response.status;
        throw new Error(error);
      }
      else{
        const json = await response.json();
        setVideos(json?.items);
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='flex items-center flex-wrap justify-start'>
      {
        Videos?.map((video) => (
          <Link to={`/watch?v=${video?.id}`} key={video?.id} className='w-[300px] h-80 cursor-pointer mb-5 mr-5'>
            <VideoCard info={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer