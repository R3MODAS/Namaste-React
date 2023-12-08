const CommentList = ({ comment }) => {
    return (
        <li className="flex items-start gap-3">
            {
                comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl && <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="authorimg" className="rounded-full w-10" onClick={() => location.href = `${comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl}`} />
            }
            <a href={comment?.snippet?.topLevelComment?.snippet?.authorChannelUrl} target="_blank">
                <div className="text-sm tracking-tight">
                    <h3 className="font-medium mb-1">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h3>
                    <p>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
                </div>
            </a>
        </li>
    )
}

export default CommentList