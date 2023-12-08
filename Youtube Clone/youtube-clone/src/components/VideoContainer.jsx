import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerUi from './ShimmerUi';

const VideoContainer = () => {

  const [Videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  
  useEffect(() => {
    FetchPopularVideos();
  }, [])

  const FetchPopularVideos = async() => {
    try {
      const res = await fetch(YOUTUBE_VIDEO_API + API_KEY);
      if(!res.ok){
        const err = res.status;
        throw new Error(err)
      }
      else{
        const json = await res.json();
        setVideos(json?.items);
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(Videos.length <= 0){
    return <ShimmerUi />
  }

  return (
    <div className='flex flex-wrap gap-3'>
      {
        Videos?.map((item) => (
          <Link key={item?.id} className='w-80 mb-2 hover:scale-95 transition-all' to={`/watch?v=${item?.id}`}>
            <VideoCard key={item?.id} info = {item} />
          </Link>
        ) )
      }
    </div>
  )
}

export default VideoContainer