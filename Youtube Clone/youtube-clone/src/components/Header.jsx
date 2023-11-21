import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between h-14 px-5">
      <div className="flex items-center gap-4">
        <button className="text-2xl">
          <FiMenu />
        </button>
        <div>
          <img src="/images/logo.png" alt="img" width={90} height={40} />
        </div>
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