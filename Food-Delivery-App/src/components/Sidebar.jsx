import React, { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { ADDRESS_API, SEARCH_LOCATION_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../utils/toggleSlice'
import { getLocation } from '../utils/locationSlice'

const Sidebar = () => {
    const [Locations, setLocations] = useState([])
    const [SearchText, setSearchText] = useState("")

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(store => store.toggle.isSidebarOpen)

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

    const handleClearInput = () => {
        setSearchText("");
    }

    const handleUserLocation = async (placeid) => {
        try {
            const response = await fetch(ADDRESS_API + placeid)
            if (!response.ok) {
                const err = response.status;
                throw new Error(err)
            }
            else {
                const { data } = await response.json();
                dispatch(getLocation({
                    city: data[0]?.address_components[0]?.short_name,
                    lat: data[0]?.geometry?.location?.lat,
                    lng: data[0]?.geometry?.location?.lng,
                    address: data[0]?.formatted_address
                }))
            }
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const handleSidebar = () => {
        dispatch(toggleSidebar())
    }

    return (
        <>
            <div className={`sidebar fixed top-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-20 px-20 py-10 flex flex-col w-[500px] ${isSidebarOpen ? "translate-x-0" : " -translate-x-full"}`}>
                <button className='text-3xl mb-5' onClick={handleSidebar}>
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
                                <li onClick={() => handleUserLocation(item?.place_id)} key={item?.place_id} className='cursor-pointer relative'>
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

            <div className={`sidebar-overlay ${isSidebarOpen ? "fixed" : "hidden"} z-10 top-0 left-0 right-0 bottom-0 bg-color-1 opacity-[0.7] overflow-hidden`}></div>
        </>
    )
}

export default Sidebar