import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_URL);
        const data = await response.json();
        setVideos(data);
    };

    useEffect(() => {
        getVideos();
    }, []);

    return <div>VideoContainer</div>;
};

export default VideoContainer;
