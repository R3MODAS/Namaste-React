import { toggleLocationSidebar } from '@/slices/appSlice'
import { addLocation } from '@/slices/locationSlice'
import { ADDRESS_API, SEARCH_LOCATION_API } from '@/utils/constants'
import { useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

const LocationSidebar = () => {
    const [SearchText, setSearchText] = useState("")
    const [Locations, setLocations] = useState([])

    const dispatch = useDispatch()
    const isLocationSidebarOpen = useSelector(state => state.app.isLocationSidebarOpen)
    const userLocation = useSelector(state => state.location.userLocation)

    const handleLocationSidebar = () => {
        dispatch(toggleLocationSidebar())
        document.body.classList.remove("overflow-hidden")
    }

    const handleShowLocations = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_FOOD_APP_BASE_URL + SEARCH_LOCATION_API + SearchText)
            if (!res.ok) {
                const err = res.status
                throw new Error(err.message)
            }
            else {
                const json = await res.json()
                setLocations(json?.data)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleClearLocations = () => {
        setSearchText("")
        setLocations([])
    }

    const handleUserLocation = async (place_id) => {
        try {
            const res = await fetch(import.meta.env.VITE_FOOD_APP_BASE_URL + ADDRESS_API + place_id)
            if (!res.ok) {
                const err = res.status
                throw new Error(err.message)
            }
            else {
                const { data } = await res.json()
                console.log(data)
                dispatch(
                    addLocation({
                        city: data[0]?.address_components[0]?.short_name,
                        lat: data[0]?.geometry?.location?.lat,
                        lng: data[0]?.geometry?.location?.lng,
                        address: data[0]?.formatted_address
                    })
                )
                window.location.reload()
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleShowLocations()
        }, 800)

        return () => {
            clearTimeout(timer)
        }
    }, [SearchText])

    return (
        <>
            <div className={`location-sidebar fixed top-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-20 sm:px-20 px-5 py-5 w-full sm:py-10 flex flex-col sm:w-[500px] ${isLocationSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className='text-3xl mb-5 text-color-1' onClick={handleLocationSidebar}>
                    <IoIosCloseCircleOutline />
                </button>
                <div className='relative'>
                    <div className='relative'>
                        <input type="text" className='h-[50px] text-base bg-transparent px-5 overflow-hidden border border-color-2 w-full font-SfProReg' placeholder='Search for area, street name..' value={SearchText} onChange={(e) => setSearchText(e.target.value)} />
                        {
                            SearchText && <button onClick={handleClearLocations} className='absolute right-4 text-sm top-1/2 -translate-y-1/2 text-color-2 font-SfProMed'>Cancel</button>
                        }
                    </div>
                    <ul className="dropdown absolute left-0 right-0">
                        {
                            SearchText && Locations?.map((item) => (
                                <li onClick={() => handleUserLocation(item?.place_id)} key={item?.place_id} className='cursor-pointer relative'>
                                    <div className='md:p-6 py-4 flex location'>
                                        <div className='text-lg w-8 text-left pt-1 pr-4 text-color-2'>
                                            <GoLocation />
                                        </div>
                                        <div className='flex flex-col'>
                                            <h3 className='text-base font-SfProReg text-color-1'>{item?.structured_formatting?.main_text}</h3>
                                            <h4 className='text-[13px] text-color-3 leading-5 font-SfCompactRef'>{item?.structured_formatting?.secondary_text}</h4>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className={`location-sidebar-overlay ${isLocationSidebarOpen ? "fixed" : "hidden"} z-10 top-0 left-0 right-0 bottom-0 bg-color-1 opacity-[0.7] overflow-hidden`}></div>
        </>
    )
}

export default LocationSidebar