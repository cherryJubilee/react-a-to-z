import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apiClient from "../../api/axios.api";
import moviesAPI from "../../api/movies/movies.api";

function Banner() {
    const [movie, setMovie] = useState([]);
    // Play 버튼 클릭 시 비디오로 전환
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보 가져오기 (모든 영화)
        const request = await moviesAPI.getNowPlaying();
        // 여러 영화 중 랜덤으로 한개의 영화 id 추출
        const movieId =
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;

        // 랜덤 선택 된 특정 영화의 상세정보 가져오기
        const { data: movieDetail } = await apiClient.get(`/movie/${movieId}`, {
            params: {
                language: "ko-KR",
                append_to_response: "videos",
            },
        });

        setMovie(movieDetail);
    };

    const truncate = (str, number) => {
        return str?.length > number ? str.substr(0, number - 1) + "..." : str;
    };

    // Play 버튼 클릭 시 비디오로 전환
    if (!isClicked) {
        return (
            <header
                className="object-contain h-[440px] "
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                }}
            >
                <div className=" ml-10 pt-36 h-48 ">
                    <h1 className=" text-white text-3xl font-bold pb-2">
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className=" flex flex-row">
                        <button
                            className=" play bg-white text-black flex flex-row justify-start items-center cursor-pointer outline-none border-none text-base font-bold rounded-sm py-1 px-7 mr-4 hover:bg-gray-300 transition-all duration-200"
                            onClick={() => setIsClicked(true)}
                        >
                            Play
                        </button>
                        <button className=" info bg-gray-600 text-white flex flex-row justify-start items-center cursor-pointer outline-none border-none text-base font-bold rounded-sm py-1 px-7 hover:bg-gray-700 transition-all duration-200">
                            More Information
                        </button>
                    </div>

                    <h1 className="text-white max-w-xs leading-normal pt-4 font-medium text-base h-20">
                        {truncate(movie.overview, 100)}
                    </h1>
                </div>
                <div className="banner--fadeBottom h-24 bg-gradient-to-t from-black via-transparent to-transparent absolute bottom-0 w-full" />
            </header>
        );
    } else {
        return (
            <div className="flex justify-center items-center flex-col w-full h-96">
                <div className="w-full h-full">
                    <Iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    ></Iframe>
                </div>
            </div>
        );
    }
}

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export default Banner;
