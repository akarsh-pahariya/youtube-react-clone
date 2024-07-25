import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [videoId] = useSearchParams();

    useEffect(() => {
        dispatch(closSidebar());
    }, []);

    return (
        <div>
            <div className="mx-3 mt-[75px] p-5">
                <iframe
                    width="840"
                    height="480"
                    src={
                        "https://www.youtube.com/embed/" +
                        videoId.get("v") +
                        "?autoplay=1"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
