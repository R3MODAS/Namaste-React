import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { AiFillPlaySquare } from "react-icons/ai";

const Sidebar = () => {
  return (
    <ul className="w-[13%] pl-4 pt-2">
      <div className="flex flex-col items-start justify-center">
        <li className="w-48 mb-1 cursor-pointer">
          <NavLink to="/" className={({ isActive }) => (
            isActive ? "bg-[#ffffff1a] flex items-center h-10 gap-6 rounded-xl px-3" : "bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3"
          )}>
            <div className="text-xl">
              <AiFillHome />
            </div>
            <p className="text-sm font-normal">Home</p>
          </NavLink>
        </li>
        <li className="w-48 mb-1 cursor-pointer">
          <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
            <div className="text-xl">
              <SiYoutubeshorts />
            </div>
            <p className="text-sm font-normal">Shorts</p>
          </button>
        </li>
        <li className="w-48 mb-1 cursor-pointer">
          <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
            <div className="text-xl">
              <MdOutlineSubscriptions />
            </div>
            <p className="text-sm font-normal">Subscriptions</p>
          </button>
        </li>
      </div>

      <div className="mt-3 pt-3 border border-[#fff3] border-b-0 border-l-0 border-r-0 flex flex-col items-start justify-center">
        <li className="flex items-center gap-1 w-48 mt-2 mb-2 px-3 cursor-pointer">
          <p className="font-medium">You</p>
          <div className="font-medium">
            <IoIosArrowForward />
          </div>
        </li>
        <li className="w-48 mb-1 cursor-pointer">
          <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
            <div className="w-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white">
                <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
              </svg>
            </div>
            <p className="text-sm font-normal">Your Channel</p>
          </button>
        </li>
        <li className="w-48 mb-1 cursor-pointer">
          <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
            <div className="w-6">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }}><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" fill="white"></path></svg>
            </div>
            <p className="text-sm font-normal">Your Videos</p>
          </button>
        </li>
      </div>
    </ul>
  )
}

export default Sidebar