import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import {GOOGLE_API_KEY} from "../utils/constants";
import CommentsContainer from '../components/CommentsContainer';

const Watch = () => {
  const [VideoDetails, setVideoDetails] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const VideoId = searchParams.get("v")

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  },[])

  const fetchVideoDetails = async() => {
    try{
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&regionCode=IN&key=${GOOGLE_API_KEY}`);
      if(!response.ok){
        const error = response.status;
        throw new Error(error);
      }
      else{
        const json = await response.json();
        setVideoDetails(json?.items);
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='ml-24 mt-8'>
      <iframe width="1280" className='rounded-xl' height="720" src={`https://www.youtube.com/embed/${VideoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <CommentsContainer />
    </div>
  )
}

export default Watch