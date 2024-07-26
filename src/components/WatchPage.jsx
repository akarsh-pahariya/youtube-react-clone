import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [videoId] = useSearchParams();

    useEffect(() => {
        dispatch(closSidebar());
    }, []);

    return (
        <div className="w-full">
            <div className="flex mt-[75px] w-full">
                <div className="mx-3 p-5">
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
                <div className="my-3 w-full">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
