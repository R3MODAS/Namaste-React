export const GOOGLE_API_KEY = "AIzaSyCKCoQGIpzvyQdPgmP7mMZIuuPbGyTK1Yo";

export const YOUTUBE_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="