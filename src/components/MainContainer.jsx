import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    const showSidebar = useSelector((store) => store.app.showSidebar);
    return (
        <div className={"mx-3 mt-[75px] " + (showSidebar && "ml-48")}>
            <ButtonList />
            <VideoContainer />
        </div>
    );
};

export default MainContainer;
