import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <header className="flex justify-between h-14 px-6">
      <div className="flex items-center gap-6">
        <button className="text-2xl" onClick={toggleMenuHandler}>
          <FiMenu />
        </button>
        <Link to="/">
          <img src="/images/logo.png" alt="img" width={90} height={40} />
        </Link>
      </div>
      <div className="flex items-center gap-4 pt-1">
        <div className="flex items-center justify-center">
          <input type="text" placeholder="Search" className="border border-[#303030] bg-transparent w-[520px] h-11 rounded-l-full px-5 border-r-0" />
          <button type="submit" className="bg-[#ffffff14] w-16 h-11 rounded-r-full text-xl px-5 border border-[#303030]">
            <IoSearchOutline />
          </button>
        </div>
        <div className="text-2xl bg-[#303030] h-10 w-10 flex items-center justify-center rounded-full">
          <MdKeyboardVoice />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 pt-1">
        <button className="text-2xl">
          <IoMdNotificationsOutline />
        </button>
        <button className="w-7 h-7 bg-red-500 rounded-full mt-1"></button>
      </div>
    </header>
  )
}

export default Header