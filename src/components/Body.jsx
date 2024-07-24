import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
    const showSidebar = useSelector((store) => store.app.showSidebar);
    return (
        <div className="flex">
            {showSidebar && <Sidebar />}
            <MainContainer />
        </div>
    );
};

export default Body;
