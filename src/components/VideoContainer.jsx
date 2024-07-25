import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_URL);
        const data = await response.json();
        setVideos(data.items);
    };

    useEffect(() => {
        getVideos();
    }, []);

    if (videos.length === 0) return <div>Loading...</div>;

    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
