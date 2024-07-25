import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    const showSidebar = useSelector((store) => store.app.showSidebar);
    return (
        <div className="flex relative">
            {showSidebar && <Sidebar />}
            <Outlet />
        </div>
    );
};

export default Body;
