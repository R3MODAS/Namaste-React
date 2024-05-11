import { Link } from 'react-router-dom'
import { IoCartOutline, IoLocationOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='shadow fixed w-full bg-white top-0 left-0 right-0 z-10'>
      <div className='flex items-center justify-between container mx-auto py-3'>
        <div className='flex font-SfProRef gap-x-4'>
          <Link to={"/"}><img className='h-14' src="assets/logo.png" alt="" /></Link>

          <button className='flex items-center gap-x-1 text-color-1'>
            <span className='font-SfProMed'>Bangalore</span>
            <IoLocationOutline className='text-lg' />
          </button>
        </div>

        <ul className='flex font-SfProMed gap-x-5 text-base text-color-1'>
          <li className='flex items-center gap-x-1 cursor-pointer'>
            <FaRegUser className='text-xl' />
            <span>Sign In</span>
          </li>
          <Link to={"/checkout"} className='flex items-center gap-x-1 cursor-pointer'>
            <IoCartOutline className='text-2xl' />
            <span>Cart</span>
          </Link>
        </ul>

      </div>
    </header>
  )
}

export default Navbar