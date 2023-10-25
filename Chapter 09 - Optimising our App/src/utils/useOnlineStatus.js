import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true);

    // Check if user is online / offline
    useEffect(() => {
        window.addEventListener("offline", () =>{
            setOnlineStatus(false)
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, [])

    // boolean
    return OnlineStatus;

}

export default useOnlineStatus;