import React, { useState } from 'react'
import { useEffect } from 'react'
import { RES_API, SLIDER_IMG } from '../utils/constants';

const Slider = () => {
  const [Image, setImage] = useState([]);
  const [ShowSlider, setShowSlider] = useState();

  useEffect(() => {
    fetchResSlider();
  }, [])

  const fetchResSlider = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();
      setImage(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {
         <div className='slider-container m-10 text-center'>

          <h1 className='font-GrotBlack text-3xl mb-5'>Best Offers for you</h1>
          <div className='flex items-center gap-5 justify-center'>
            {Image?.map((sliderImg) => (
              <div key={sliderImg?.id} className='w-[425px] h-[252] cursor-pointer'>
                <img src={SLIDER_IMG + sliderImg.imageId} alt="slider-img" className='object-cover' />
              </div>
            )
            )}
          </div>
        </div>
      }
    </>

  )
}

export default Slider