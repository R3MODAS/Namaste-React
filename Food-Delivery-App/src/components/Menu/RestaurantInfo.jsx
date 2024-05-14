import { Link } from "react-router-dom"

const RestaurantInfo = ({ ResInfo }) => {
    console.log(ResInfo)
    const { city, name, cuisines, areaName, sla, avgRating, totalRatingsString, feeDetails } = ResInfo
    return (
        <>
            <div className="flex font-SfCompactMed" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-color-1">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-xs font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-xs font-medium">{city}</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="ms-1 text-xs font-medium text-[#535665]">{name}</span>
                        </div>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default RestaurantInfo