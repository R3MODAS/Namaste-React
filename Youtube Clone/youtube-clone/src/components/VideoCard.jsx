import { useEffect, useState } from "react";

const VideoCard = ({ info }) => {
    const [ChannelInfo, setChannelInfo] = useState({});

    const { title, thumbnails, channelId } = info?.snippet;
    const { viewCount } = info?.statistics;
    const { duration } = info?.contentDetails;

    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

    useEffect(() => {
        FetchChannelIcon();
    }, [])

    const FetchChannelIcon = async () => {
        try {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
            if (!res.ok) {
                const err = res.status;
                throw new Error(err);
            }
            else {
                const json = await res.json();
                setChannelInfo((json?.items.find((x) => x?.snippet))?.snippet)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const { title: channelTitle, thumbnails: channelThumb } = ChannelInfo;

    const ConvertDuration = (durationStr) => {
        // Remove the PT
        const removePT = durationStr?.slice(2);

        // Split the Minutes and Seconds
        const value = removePT.includes("M") ? removePT?.split("M") : removePT?.split("S")

        const [minute, second] = value;

        // Removing the S and M
        const Minute = minute?.slice(0, -1);
        const Seconds = second?.slice(0, -1);
        
        if (Minute && Seconds) {
            if(Seconds.length === 1){
                return `${Minute}:0${Seconds}`;
            }
            else{
                return `${Minute}:${Seconds}`;
            }
        }
        else if (Minute) {
            if(Minute.length === 1){
                return `${Minute}:00`;
            }else{
                return `0${Minute}`;
            }
        }
        else {
            if(Seconds.length === 1){
                return `0:${Seconds}0`;
            }else{
                return `0:${Seconds}`;
            }
        }
    }

    const truncateString = (str) => {
        if (str?.length < 70) {
            return str;
        }
        else {
            return str?.slice(0, 70) + "...";
        }
    }

    const ConvertViews = (views) => {
        if (views < 1000) {
            return Math.round(views);
        }
        else if (views < 1000000) {
            return (Math.round(views / 1000)) + "K views";
        }
        else if (views < 1000000000) {
            return (Math.round(views / 1000000)) + "M views";
        }
        else {
            return (Math.round(views / 1000000000)) + "B views";
        }
    }

    return (
        <>
            <div className='relative'>
                <img src={thumbnails.medium.url} alt="video" className='rounded-xl' />
                <span className='absolute bottom-1 right-1 bg-black text-xs font-medium px-1 py-[2px] rounded-lg'>{ConvertDuration(duration)}</span>
            </div>
            <div className="flex gap-3 items-start mt-3">
                <img src={channelThumb?.default?.url} alt="thumbnail" className="w-8 h-8 rounded-full" />
                <div className="tracking-tight pr-5">
                    <h2 className='font-medium leading-6'>{truncateString(title)}</h2>
                    <p className='text-[#aaa] text-sm pt-1 leading-'>{channelTitle}</p>
                    <span className='text-[#aaa] text-sm'>{ConvertViews(viewCount)}</span>
                </div>
            </div>
        </>
    )
}

export default VideoCard