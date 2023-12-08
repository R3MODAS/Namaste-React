import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  const { pathname } = useLocation();
  return (
    <>
      {
        isSidebarOpen ?
          <>
            <div className="pt-3 w-[12%] fixed top-14 left-0 pr-6 pl-2 bg-[#0F0F0F] z-10 h-full">
              <ul className="flex flex-col items-start justify-center">
                <li className="w-48 mb-1 cursor-pointer bg-[#0f0f0f] hover:bg-[#ffffff1a] rounded-xl">
                  <Link to="/" className="flex items-center h-10 gap-6 px-3">
                    <div className="text-xl">
                      <AiFillHome />
                    </div>
                    <p className="text-sm font-normal">Home</p>
                  </Link>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="text-xl">
                      <SiYoutubeshorts />
                    </div>
                    <p className="text-sm font-normal">Shorts</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="text-xl">
                      <MdOutlineSubscriptions />
                    </div>
                    <p className="text-sm font-normal">Subscriptions</p>
                  </button>
                </li>
              </ul>

              <ul className="mt-3 pt-3 border border-[#fff3] border-b-0 border-l-0 border-r-0 flex flex-col items-start justify-center">
                <li className="flex items-center gap-1 w-48 mt-2 mb-2 px-3 cursor-pointer">
                  <p className="font-medium">You</p>
                  <div className="font-medium">
                    <IoIosArrowForward />
                  </div>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white">
                        <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                      </svg>
                    </div>
                    <p className="text-sm font-normal">Your Channel</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style={{ pointerEvents: "none", display: "block" }} focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" fill="white"></path></g></svg>
                    </div>
                    <p className="text-sm font-normal">History</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }}><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z" fill="white"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Your Videos</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer hover:bg-[#ffffff1a] rounded-xl">
                  <button className="flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }}><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" fill="white"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Watch Later</p>
                  </button>
                </li>
              </ul>

              <ul className="mt-3 pt-3 border border-[#fff3] border-b-0 border-l-0 border-r-0 flex flex-col items-start justify-center">
                <li className="w-48 mt-2 mb-2 px-3 cursor-pointer">
                  <p className="font-medium">Explore</p>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Trending</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Shopping</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Music</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Films</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Gaming</p>
                  </button>
                </li>
                <li className="w-48 mb-1 cursor-pointer">
                  <button className="bg-[#0f0f0f] flex items-center h-10 gap-6 rounded-xl px-3">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path></svg>
                    </div>
                    <p className="text-sm font-normal">Sport</p>
                  </button>
                </li>
              </ul>
            </div>
          </>
          :
          <>
            {
              pathname === "/watch" ? <></>
                : 
                <ul className="w-[4%] pl-1 pr-1 pt-3 fixed top-14 left-0 bg-[#0F0F0F] z-10 h-full">
                  <li className="mb-7 cursor-pointer">
                    <Link to="/" className="flex flex-col items-center gap-1">
                      <div className="text-xl">
                        <AiFillHome />
                      </div>
                      <p className="text-[10px]">Home</p>
                    </Link>
                  </li>
                  <li className="flex flex-col items-center gap-1 mb-7 cursor-pointer">
                    <div className="text-xl">
                      <SiYoutubeshorts />
                    </div>
                    <p className="text-[10px]">Shorts</p>
                  </li>
                  <li className="flex flex-col items-center gap-1 mb-7 cursor-pointer">
                    <div className="text-xl">
                      <MdOutlineSubscriptions />
                    </div>
                    <p className="text-[10px]">Subscriptions</p>
                  </li>
                  <li className="flex flex-col items-center gap-1 cursor-pointer">
                    <div className="w-6">
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block" }} fill="white"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
                    </div>
                    <p className="text-[10px]">You</p>
                  </li>
                </ul>
            }
          </>
      }
    </>
  )
}

export default Sidebar