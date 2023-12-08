import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeMenu, toggleComment } from "../utils/appSlice";
import CommentList from "../components/CommentList";
import { RiArrowDownSLine } from "react-icons/ri";

const WatchPage = () => {
  const [SearchParams] = useSearchParams();
  const VideoId = SearchParams.get("v");
  const dispatch = useDispatch();
  const [Comments, setComments] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const toggleHideComment = useSelector((store) => store.app.isCommentOpen);

  useEffect(() => {
    fetchComments();
    dispatch(closeMenu());
  }, [])

  const fetchComments = async () => {
    try {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${VideoId}&key=${API_KEY}`);

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

  const handleHideReplies = () => {
    dispatch(toggleComment());
  }

  return (
    <div className="flex justify-start pl-24 mt-20 mb-10">
      <div className="w-[71%]">
        <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-8">{Comments?.length} Comments</h2>

          <ul className="w-4/5">
            {
              Comments?.map((comment) => (
                <div key={comment?.id} className="mb-8">
                  <CommentList comment={comment?.snippet?.topLevelComment?.snippet} />
                  {comment?.replies?.comments && <button className=" flex items-center gap-1 ml-12 my-3 text-blue-600" onClick={handleHideReplies}>
                    <RiArrowDownSLine className="text-xl" />
                    <div className="text-sm">
                      Reply
                    </div>
                  </button>}
                  {
                    toggleHideComment && <>
                      {comment?.replies?.comments && comment?.replies?.comments?.map((comment) => (
                        <div key={comment?.id} className="ml-14 mb-6">
                          <CommentList comment={comment?.snippet} />
                        </div>
                      ))}
                    </>
                  }
                </div>
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