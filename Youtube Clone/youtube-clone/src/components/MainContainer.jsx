import React from 'react'
import VideoContainer from "./VideoContainer"
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {
        isSidebarOpen ?
        <div className='absolute left-[12%] top-14 min-h-screen pt-3'>
          <VideoContainer />
        </div> : <div className='absolute left-[5%] top-14 min-h-screen pt-3'>
          <VideoContainer />
        </div>
      }

    </>
  )
}

export default MainContainer