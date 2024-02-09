import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <header className='shadow-md w-full fixed left-0 top-0 right-0 h-20 bg-white z-10 px-5 block text-color-1'>
            <div className='flex justify-between items-center h-full'>
                <div className='flex items-center'>
                    <Link to="/">
                        <img src="/swiggy-logo.png" alt="logo" className='h-14' />
                    </Link>
                    <button type='button' className='flex items-center'>
                        Location
                        <IoIosArrowDown />
                    </button>
                </div>

                <div>
                    <Link to="/">
                        <IoSearch />
                        Search
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header