import { FiMenu } from "react-icons/fi";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [ShowSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // API call on change of Search Query
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }

  }, [SearchQuery])

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
      if (!res.ok) {
        const err = res.status;
        throw new Error(err);
      }
      else {
        const json = await res.json();
        setSuggestions(json[1]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClearInput = () => {
    setSearchQuery("");
    setSuggestions([]);
  }

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
        <div className="flex items-center justify-center relative">
          <div className="relative">
            <input type="text" placeholder="Search" className="border border-[#303030] bg-transparent w-[520px] h-11 rounded-l-full px-5 border-r-0" value={SearchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}
            />
            {
              Suggestions.length != 0 && <div className="text-3xl absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer" onClick={handleClearInput}>
                <IoCloseOutline />
              </div>
            }
          </div>
          <button type="submit" className="bg-[#ffffff14] w-16 h-11 rounded-r-full text-xl px-5 border border-[#303030]">
            <IoSearchOutline />
          </button>
          {
            (ShowSuggestions && Suggestions.length != 0) &&
            <ul className="absolute top-[3.3rem] left-0 right-0 w-[520px] rounded-xl shadow-lg bg-[#212121] pt-5 pb-1 px-4">
              {
                Suggestions?.map((item) => (
                  <li key={item} className="flex items-center gap-3 pt-2 pb-2 mb-3 cursor-pointer hover:bg-[#ffffff1a]">
                    <button type="submit" className="text-lg">
                      <IoSearchOutline />
                    </button>
                    <p className="font-medium">{item}</p>
                  </li>
                ))
              }
            </ul>
          }
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