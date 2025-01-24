const baseUrl = `https://api.themoviedb.org/3`;
const apiKey = process.env.REACT_APP_API_KEY;

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}
export const discoverMedia = async (mediaType, queryParams) => {
    let url = `${baseUrl}/discover/${mediaType}?api_key=${apiKey}`;
    if (queryParams) {
        for (const key in queryParams) {
            url += `&${key}=${queryParams[key]}`
        }
    }
    return await fetchData(url);
};
export const fetchSingleMedia = async (mediaType, mediaId) => {
    const url = `${baseUrl}/${mediaType}/${mediaId}?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchGenres = async (mediaType) => {
    const url = `${baseUrl}/genre/${mediaType}/list?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchNowPlaying = async (mediaType) => {
    const url = `${baseUrl}/${mediaType}/now_playing?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchTopRated = async (mediaType) => {
    const url = `${baseUrl}/${mediaType}/top_rated?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchPopular = async (mediaType) => {
    const url = `${baseUrl}/${mediaType}/popular?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchUpcoming = async (mediaType) => {
    const url = `${baseUrl}/${mediaType}/upcoming?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchOnAir = async (mediaType) => {
    const url = `${baseUrl}/${mediaType}/on_the_air?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchRecommendations = async (mediaType, mediaId) => {
    const url = `${baseUrl}/${mediaType}/${mediaId}/recommendations?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchImages = async (mediaType, mediaId) => {
    const url = `${baseUrl}/${mediaType}/${mediaId}/images?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchVideos = async (mediaType, mediaId) => {
    const url = `${baseUrl}/${mediaType}/${mediaId}/videos?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchReviews = async (mediaType, mediaId) => {
    const url = `${baseUrl}/${mediaType}/${mediaId}/reviews?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchTrending = async (mediaType, trendingTime) => {
    const url = `${baseUrl}/trending/${mediaType}/${trendingTime || 'day'}?api_key=${apiKey}`;
    return await fetchData(url);
};
export const fetchSearch = async (mediaType, searchQuery) => {
    let url = `${baseUrl}/search/${mediaType}?api_key=${apiKey}`;
    if (searchQuery) {
        for (const key in searchQuery) {
            url += `&${key}=${searchQuery[key]}`
        }
    }
    return await fetchData(url);
};
export const fetchSeasonEpisodes = async (seriesId, seasonNum) => {
    let url = `${baseUrl}/tv/${seriesId}/season/${seasonNum}?api_key=${apiKey}`;
    return await fetchData(url);
};