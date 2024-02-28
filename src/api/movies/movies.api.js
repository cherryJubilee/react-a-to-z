import apiClient from "../axios.api";

// 현재 상영 중인 영화 가져오기
const getNowPlaying = async () => {
    const response = await apiClient.get(
        "/movie/now_playing?language=ko-KR?language=ko-KR"
    );
    return response;
};
// 넷플 오리지널
const getNetflixOriginals = async () => {
    const response = await apiClient.get(
        "/discover/tv?with_networks=213?language=ko-KR"
    );
    return response;
};
// 트렌딩한 영화
const getTrending = async () => {
    const response = await apiClient.get(
        "/trending/all/week?language=ko-KR?language=ko-KR"
    );
    return response;
};

// 최고 평점의 영화 가져오기
const getTopRated = async () => {
    const response = await apiClient.get(
        "/movie/top_rated?language=ko-KR?language=ko-KR"
    );
    return response;
};

const getActionMovies = async () => {
    const response = await apiClient.get(
        "/discover/movie?with_genres=28?language=ko-KR?language=ko-KR"
    );
    return response;
};

const getComedyMovies = async () => {
    const response = await apiClient.get(
        "/discover/movie?with_genres=35?language=ko-KR"
    );
    return response;
};

const getHorrorMovie = async () => {
    const response = await apiClient.get(
        "/discover/movie?with_genres=27?language=ko-KR"
    );
    return response;
};

const getRomanceMovies = async () => {
    const response = await apiClient.get(
        "/discover/movie?with_genres=10749?language=ko-KR"
    );
    return response;
};

const getDocumentaries = async () => {
    const response = await apiClient.get(
        "/discover/movie?with_genres=99?language=ko-KR"
    );
    return response;
};

const moviesAPI = {
    getNowPlaying,
    getTopRated,
    getNetflixOriginals,
    getTrending,
    getActionMovies,
    getComedyMovies,
    getHorrorMovie,
    getRomanceMovies,
    getDocumentaries,
};

export default moviesAPI;
