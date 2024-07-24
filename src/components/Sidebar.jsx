const Sidebar = () => {
    return (
        <div className="text-lg py-2 w-48 text-center shadow-xl">
            <ul className="font-semibold my-2">
                <li className="my-1">Home</li>
                <li className="my-1">Shorts</li>
                <li className="my-1">Subscriptions</li>
            </ul>
            <hr className="border-gray-400 m-2" />
            <h1 className="font-semibold my-2">You {">"}</h1>
            <ul className="my-2">
                <li className="my-1">Your Channel</li>
                <li className="my-1">History</li>
                <li className="my-1">Playlists</li>
                <li className="my-1">Your Videos</li>
                <li className="my-1">Watch Later</li>
                <li className="my-1">Liked Videos</li>
            </ul>
            <hr className="border-gray-400 m-2" />
            <h1 className="font-semibold my-2">Explore {">"}</h1>
            <ul className="my-2">
                <li className="my-1">Trending</li>
                <li className="my-1">Shopping</li>
                <li className="my-1">Music</li>
                <li className="my-1">Movies</li>
                <li className="my-1">Live</li>
                <li className="my-1">Gaming</li>
            </ul>
        </div>
    );
};

export default Sidebar;
