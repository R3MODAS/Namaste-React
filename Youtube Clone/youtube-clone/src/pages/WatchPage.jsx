import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../utils/appSlice";
import CommentList from "../components/CommentList";

const WatchPage = () => {
  const [SearchParams] = useSearchParams();
  const VideoId = SearchParams.get("v");
  const dispatch = useDispatch();
  const [Comments, setComments] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    fetchComments();
    dispatch(closeMenu());
  }, [])

  const fetchComments = async () => {
    try {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${VideoId}&key=${API_KEY}`);

      if (!res.ok) {
        const err = res.status;
        throw new Error(err);
      }
      else {
        const json = await res.json();
        setComments(json?.items);
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex justify-start pl-24 mt-20 mb-10">
      <div className="w-[71%]">
        <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-8">{Comments?.length} Comments</h2>

          <ul className="flex flex-col gap-10 w-4/5">
            {
              Comments?.map((comment) => (
                <CommentList key={comment?.id} comment={comment} />
              ))
            }
          </ul>
        </div>
      </div>
      <div className="w-full ml-4">
        <h2>Featured Section</h2>
      </div>
    </div>
  )
}

export default WatchPage