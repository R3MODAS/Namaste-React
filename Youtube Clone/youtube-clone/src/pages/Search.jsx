import { useSelector } from "react-redux"
import SearchCard from "../components/SearchCard";

const Search = () => {
  const SearchResults = useSelector((store) => store.search.results);

  return (
    <div className="mt-20 flex flex-col justify-center items-start mx-auto">
        {
          SearchResults?.map((result) => (
            <div key={result?.id?.videoId} className="mb-10">
              <SearchCard data = {result?.snippet} />
            </div>
          ))
        }
    </div>
  )
}

export default Search