import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const SearchResults = useSelector((store) => store.youtube.results);
  const navigate = useNavigate();

  const handleWatchVideo = (videoId) => {
    if(videoId){
      navigate(`/watch?v=${videoId}`);
    }
    else{
      return;
    }
  }

  return (
    <div className='top-28 min-h-screen pt-3 flex flex-col justify-center items-center mt-28 w-4/5 mx-auto pl-24'>
      {
        SearchResults?.map((result) => {
          if (result?.id?.kind === "youtube#video") {
          return <div key={result?.etag} className='flex gap-3 w-4/5 mb-10 cursor-pointer' onClick={() => handleWatchVideo(result?.id?.videoId)}>
            {
              (result?.snippet?.thumbnails?.medium?.width && result?.snippet?.thumbnails?.medium?.height) ?
                <>
                  <img src={result?.snippet?.thumbnails?.medium?.url} alt="img" className='rounded-[10px] object-cover' />

                  <div>
                    <h3 className='text-lg mb-1 w-3/5'>{result?.snippet?.title}</h3>
                    <div className='text-xs text-[#aaa] mb-2 w-fit'>{result?.snippet?.channelTitle}</div>
                    <p className='text-xs text-[#aaa] w-5/6'>{result?.snippet?.description}</p>
                  </div>

                </> : 
                <div className='flex items-center justify-center gap-5 w-full'>
                  <img src={result?.snippet?.thumbnails?.medium?.url} alt="img" className='rounded-full w-32' />
                  <div>
                    <h3 className='text-lg font-normal'>{result?.snippet?.title}</h3>
                    <p className='text-xs text-[#aaa] w-1/2 mt-2'>{result?.snippet?.description}</p>
                  </div>
                </div>
            }

          </div>
          }
})
      }
    </div>
  )
}

export default Search