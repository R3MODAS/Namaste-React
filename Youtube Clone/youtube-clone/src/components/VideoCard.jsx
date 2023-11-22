import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

    const truncateString = (str) => {
        return str.slice(0,75) + "...";
    }

    ;
  return (
    <div>
        <img src={thumbnails?.high?.url} alt="thumbnail" className='w-full h-[170px] rounded-lg object-cover' />
        <h2 className='pt-3 font-medium text-base w-[80%]'>{truncateString(title)}</h2>
        <h3 className='text-[#aaa] text-sm'>{channelTitle}</h3>
        <div className='text-[#aaa] text-sm'>
            <span>{viewCount} views</span>
        </div>
    </div>
  )
}

export default VideoCard