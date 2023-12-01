import { FiMenu } from "react-icons/fi";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults, searchResults } from "../utils/searchSlice";

const Header = () => {
  const navigate = useNavigate();
  const [SearchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [ShowSuggestions, setShowSuggestions] = useState(false);
  const SearchCache = useSelector((store) => store.search.suggestions);
  const dispatch = useDispatch();

  /* 
    SearchCache = {
      "iphone" : ["iphone", "iphone 11"]
    }

    SearchQuery = "iphone"
    
    if SearchCache[SearchQuery] is true => just show the suggestions with the SearchCache[SearchQuery] which is the array ["iphone", "iphone 11"] results rather than again doing a api call
  
  */

  useEffect(() => {
    // API call on change of Search Query
    const timer = setTimeout(() => {
      if (SearchCache[SearchQuery]) {
        setSuggestions(SearchCache[SearchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [SearchQuery])

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + SearchQuery);
      if (!res.ok) {
        const err = res.status;
        throw new Error(err);
      }
      else {
        const json = await res.json();
        setSuggestions(json[1]);

        // Update the Cache
        dispatch(cacheResults({
          [SearchQuery]: json[1]
        }))
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearch = async(item) => {
    try{
      setShowSuggestions(false);
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${item}&key=${GOOGLE_API_KEY}`);
      if(!res.ok){
        const err = res.status;
        throw new Error(err);
      }
      else{
        const json = await res.json();
        dispatch(searchResults(json?.items));
        navigate("/search");
      }
    }catch(err){
      console.log(err)
    }
  }

  const handleClearInput = () => {
    setSearchQuery("");
    setSuggestions([]);
  }

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
              onFocus={() => setShowSuggestions(true)}/>
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
                  <li key={item} className="flex items-center gap-3 pt-2 pb-2 mb-3 cursor-pointer hover:bg-[#ffffff1a]" onClick={() => handleSearch(item)}>
                    <button type="submit" className="text-lg">
                      <IoSearchOutline />
                    </button>
                    <div>
                      <p className="font-medium">{item}</p>
                    </div>
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