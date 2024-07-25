const VideoCard = ({ info }) => {
    const { title, channelTitle, thumbnails } = info.snippet;
    return (
        <div className="p-2 m-2 max-w-72 border-2 border-black rounded-lg">
            <img src={thumbnails.medium.url} className="h-40" />
            <h1 className="text-md font-semibold">{title}</h1>
            <h2 className="text-sm">{channelTitle}</h2>
        </div>
    );
};

export default VideoCard;
