export const YOUTUBE_VIDEOS_URL =
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&reigonCode=IN&key=" +
    import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
