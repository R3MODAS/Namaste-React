import { useEffect, useState } from 'react'
import { IMG_CAROUSEL, RESTAURANT_API, SEARCH_LOCATION_API } from '../utils/constants'
import TopChain from '../components/TopChain';
import RestaurantCard from '../components/RestaurantCard';
import Header from "../components/Header"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const Home = () => {
  const [ImageCarousel, setImageCarousel] = useState([]);
  const [TopChains, setTopChains] = useState([]);
  const [Restaurants, setRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([])
  const [Locations, setLocations] = useState([])
  const [toggleSidebar, setToggleSidebar] = useState(true)
  const [SearchText, setSearchText] = useState("")

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(RESTAURANT_API);
      if (!response.ok) {
        const err = response.status;
        throw new err
      }
      else {
        const json = await response.json();

        const restaurants = json?.data?.cards?.find((x) => x?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants

        const imgCarousel = json?.data?.cards?.find(x => x?.card?.card?.id === "whats_on_your_mind")?.card?.card?.gridElements?.infoWithStyle?.info

        const topChains = json?.data?.cards?.find(x => x?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants

        setImageCarousel(imgCarousel)
        setTopChains(topChains)
        setRestaurants(restaurants)
        setFilteredRestaurants(restaurants)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleFoodScrollLeft = () => {
    const foodCategory = document.querySelector(".food-category");
    foodCategory.scrollLeft = foodCategory.scrollLeft - 250;
  }

  const handleFoodScrollRight = () => {
    const foodCategory = document.querySelector(".food-category");
    foodCategory.scrollLeft = foodCategory.scrollLeft + 250;
  }

  const handleTopChainLeft = () => {
    const topCategory = document.querySelector(".top-chain-category");
    topCategory.scrollLeft = topCategory.scrollLeft - 250
  }

  const handleTopChainRight = () => {
    const topCategory = document.querySelector(".top-chain-category");
    topCategory.scrollLeft = topCategory.scrollLeft + 250
  }

  const handleSearchLocation = async (e) => {
    try {
      setSearchText(e.target.value);
      if (SearchText.length >= 3) {
        const response = await fetch(SEARCH_LOCATION_API + SearchText)
        if (!response.ok) {
          const err = response.status;
          throw new err
        }
        else {
          const json = await response.json();
          setLocations(json?.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const closeSideBar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const handleClearInput = () => {
    setSearchText("");
  }

  const handleRating = () => {
    setRestaurants(FilteredRestaurants.filter(res => res?.info?.avgRating >= 4.0))
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

      <div className="container mx-auto mt-24">
        {
          (ImageCarousel && ImageCarousel?.length != 0) &&
          <>
            <section id='img-carousel' className="relative">
              <h2 className='font-GrotBlack text-2xl pb-5'>What's on your mind?</h2>
              <div className="scroll-buttons absolute top-0 flex gap-2 right-10">
                <button onClick={handleFoodScrollLeft} className="scroll-left text-white flex justify-center cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path></svg>
                </button>
                <button onClick={handleFoodScrollRight} className="scroll-right flex justify-center cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path></svg>
                </button>
              </div>
              <div className="food-category overflow-x-scroll scroll-smooth scrollbar-hide w-[1500px]">
                <div className="flex gap-6">
                  {
                    ImageCarousel?.map((item) => (
                      <div className='cursor-pointer' key={item?.id}>
                        <div className='w-36'>
                          <img src={IMG_CAROUSEL + item?.imageId} alt={item?.accessibility?.altText} />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </section>

            <div className="divider"></div>
          </>

        }

        {
          (TopChains && TopChains?.length != 0) &&
          <>
            <section id='top-chain' className='relative'>
              <h2 className='font-GrotBlack text-2xl pb-5 pt-5'>Top restaurant chains in Kolkata</h2>
              <div className="scroll-buttons absolute top-0 flex gap-2 right-10">
                <button onClick={handleTopChainLeft} className="scroll-left text-white flex justify-center cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path></svg>
                </button>
                <button onClick={handleTopChainRight} className="scroll-right flex justify-center cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z" fill="rgba(2, 6, 12, 0.92)" fillOpacity="0.92"></path></svg>
                </button>
              </div>
              <div className="top-chain-category overflow-x-scroll scroll-smooth scrollbar-hide w-[1500px]">
                <div className='flex gap-8'>
                  {
                    TopChains?.map((item) => (
                      <TopChain info={item?.info} key={item?.info?.id} />
                    ))
                  }
                </div>
              </div>
            </section>

            <div className="divider"></div>
          </>
        }

        {
          (Restaurants && Restaurants?.length != 0) &&
          <>
            <section id='restaurants'>
              <h2 className='font-GrotBlack text-2xl pb-5 pt-5'>Restaurants with online food delivery in Kanchrapara</h2>

              <div className="filter-btns flex gap-3">
                <button className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Fast Delivery</button>
                <button onClick={handleRating} className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Rating 4.0+</button>
                <button className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Pure Veg</button>
                <button className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Offers</button>
                <button className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Rs. 300-Rs. 600</button>
                <button className='filter-btn font-GrotMed text-color-3 text-sm tracking-tight'>Less than Rs. 300</button>
              </div>

              <div className='flex gap-8 flex-wrap mt-10'>
                {
                  Restaurants?.map((res) => (
                    <RestaurantCard key={res?.info?.id} info={res?.info} />
                  ))
                }
              </div>

            </section>
          </>
        }

      </div>

      <div className={`sidebar fixed top-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-20 px-20 py-10 flex flex-col w-[500px] ${toggleSidebar ? "-translate-x-full" : "translate-x-0"}`}>
        <button className='text-3xl mb-5' onClick={closeSideBar}>
          <IoIosCloseCircleOutline />
        </button>
        <div className='relative'>
          <div className='relative'>
            <input type="text" className='h-[50px] text-base bg-transparent px-5 overflow-hidden border w-full font-ProximaNovaMed' placeholder='Search for area, street name..' onChange={(e) => handleSearchLocation(e)} value={SearchText} />
            {
              SearchText && <button type='button' onClick={handleClearInput} className='absolute right-4 text-sm top-1/2 -translate-y-1/2 text-color-2 font-ProximaNovaMed'>
                Cancel
              </button>
            }
          </div>
          <ul className="dropdown absolute left-0 right-0">
            {
              SearchText && Locations?.map((item) => (
                <li key={item?.place_id} className='cursor-pointer relative'>
                  {console.log(item)}
                  <div className='p-6 flex location'>
                    <div className='text-lg text-color-6 w-8 text-left pt-1 pr-4'>
                      <GoLocation />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-base font-ProximaNovaMed text-color-1'>{item?.structured_formatting?.main_text}</h3>
                      <h4 className='text-[13px] text-color-5 leading-5 font-ProximaNovaThin'>{item?.structured_formatting?.secondary_text}</h4>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

      </div>

      <div className={`sidebar-overlay ${toggleSidebar ? "hidden" : "fixed"} z-10 top-0 left-0 right-0 bottom-0 bg-color-1 opacity-[0.7] overflow-hidden`}></div>
    </>
  )
}

export default Home