const CommentList = (props) => {
    const {authorProfileImageUrl, authorChannelUrl, authorDisplayName, textOriginal} = props?.comment;
    return (
        <li className="flex items-start gap-3">
            {
                authorProfileImageUrl && <img src={authorProfileImageUrl} alt="authorimg" className="rounded-full w-10" onClick={() => location.href = `${authorChannelUrl}`} />
            }
            <a href={authorChannelUrl} target="_blank">
                <div className="text-sm tracking-tight">
                    <h3 className="font-medium mb-1">{authorDisplayName}</h3>
                    <p>{textOriginal}</p>
                </div>
            </a>
        </li>
    )
}

export default CommentList