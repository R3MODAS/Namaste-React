import React from 'react'

const SearchCard = ({ data }) => {
  const { title, channelTitle, thumbnails, description } = data;
  return (
    <div className='flex gap-5'>
        <img src={thumbnails?.medium?.url} alt="thumbnail" className='rounded-xl object-cover' />
      <div>
        <h2 className='text-lg pb-2 w-3/4'>{title}</h2>
        <h3 className='text-[#aaa] text-xs pb-2 w-3/4'>{channelTitle}</h3>
        <p className='text-[#aaa] text-xs w-5/6'>{description}</p>
      </div>
    </div>
  )
}

export default SearchCard