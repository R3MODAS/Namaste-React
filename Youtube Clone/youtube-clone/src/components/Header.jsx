import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults, clearcacheResults, searchResults } from "../utils/youtubeSlice";

const Header = () => {
  const [SearchText, setSearchText] = useState("");
  const [Suggestions, setSuggestions] = useState([])
  const [ShowSuggestionBox, setShowSuggestionBox] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cachedData = useSelector((store) => store.youtube.suggestions);
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    const timer = setTimeout(() => {
      if(cachedData[SearchText]){
        setSuggestions(cachedData[SearchText]);
      }else{
        getSearchSuggestions();
      }
    }, 200)

    return () => {
      clearTimeout(timer);
    }
  }, [SearchText]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + SearchText);
      if (!res.ok) {
        const err = res.status;
        throw new Error(err)
      }
      else {
        const json = await res.json();
        setSuggestions(json[1]);

        // Update the Cached Data
        dispatch(cacheResults({
          [SearchText] : json[1]
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSidebar = () => {
    dispatch(toggleMenu());
  }

  const handleClearSearch = () => {
    setSearchText("");
    setSuggestions([]);
    dispatch(clearcacheResults());
  }

  const handleSearchItem = async(item) => {
    try {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${item}&key=${API_KEY}`);

      if(!res.ok){
        const err = res.status;
        throw new Error(err);
      }
      else{
        const json = await res.json();
        dispatch(searchResults(json?.items));
        setShowSuggestionBox(false);
        navigate("/search");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="flex justify-between items-center h-14 px-6 fixed top-0 left-0 right-0 z-20 w-full bg-[#0F0F0F]">

      <div className="flex items-center gap-6">
        <RxHamburgerMenu className="text-2xl cursor-pointer" onClick={handleSidebar} />
        <Link to="/">
          <img src="./images/logo.png" alt="logo" className="h-5" />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="flex items-center">
            <div className="flex items-center h-11 relative">
              <input type="text" placeholder="Search" className="bg-[#121212] text-[#ffffffe0] border border-[#303030] w-[550px] h-full rounded-l-full pl-5" value={SearchText} onChange={e => setSearchText(e.target.value)} onFocus={() => setShowSuggestionBox(true)} />
              {
                Suggestions.length != 0 && <IoCloseOutline className="text-3xl absolute right-2 cursor-pointer" onClick={handleClearSearch} />
              }
            </div>
            <div className="text-2xl bg-[#ffffff14] flex items-center justify-center w-16 rounded-r-full cursor-pointer h-11">
              <IoSearchOutline />
            </div>
          </div>
          {
            (Suggestions.length != 0 && ShowSuggestionBox) &&
            <ul className="absolute top-[3rem] left-0 right-0 w-[550px] rounded-xl shadow-lg bg-[#212121] pt-5 pb-3">
              {
                Suggestions?.map((item) => (
                  <li key={item} className="pt-2 pb-2 mb-1 pl-5 cursor-pointer hover:bg-[#ffffff1a] flex gap-6" onClick={() => handleSearchItem(item)}>
                    <button type="submit" className="text-lg">
                      <IoSearchOutline />
                    </button>
                    <div className="inline-block">
                      <p className="font-medium">{item}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          }
        </div>
        <button className="bg-[#ffffff14] h-11 flex justify-center items-center w-11 rounded-full cursor-pointer">
          <MdKeyboardVoice className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center gap-6 cursor-pointer">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <FaUserCircle className="text-2xl" />
      </div>

    </header>
  )
}

export default Header