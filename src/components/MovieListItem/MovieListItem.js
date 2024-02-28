import React, { useEffect, useState } from "react";
import MovieModal from "../MovieModal/MovieModal";

function MovieListItem({ title, id, url, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState(false);

    useEffect(() => {
        getMovieData();
    }, []);

    const getMovieData = async () => {
        const request = await url;
        console.log(request);
        setMovies(request.data.results);
    };

    // 영화포스터 클릭 시 상세정보(모달) 보여주기
    const handleClick = (movie) => {
        setModalOpen(true);
        // 영화정보도 넣어주기 위함
        setMovieSelected(movie);
    };

    return (
        <section className="row mr-5 text-white ">
            <h2 className="pl-5 texts">{title}</h2>
            <div className="slider relative ">
                <div
                    className="slider__arrow-left absolute top-0 left-0 h-full w-8 bg-black bg-opacity-20 flex items-center justify-center cursor-pointer transition-all duration-400 ease-in-out"
                    onClick={() => {
                        document.getElementById(id).scrollLeft -=
                            window.innerWidth - 80;
                    }}
                >
                    <span className="arrow transform transition duration-400 ease-in-out hover:scale-150">
                        {"<"}
                    </span>
                </div>
                <div
                    id={id}
                    className="flex overflow-x-scroll overflow-y-hidden py-5 pl-5 scroll-smooth"
                >
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`object-contain transition-transform duration-450 ${
                                isLargeRow ? "max-h-[320px]" : "max-h-[144px]"
                            } w-full mr-2.5 rounded hover:scale-105`}
                            src={`https://image.tmdb.org/t/p/original/${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                <div
                    className="slider__arrow-right absolute top-0 right-0 h-full w-8 bg-black bg-opacity-20 flex items-center justify-center cursor-pointer transition-all duration-400 ease-in-out"
                    onClick={() => {
                        document.getElementById(id).scrollLeft +=
                            window.innerWidth - 80;
                    }}
                >
                    <span className="arrow transform transition duration-400 ease-in-out hover:scale-150">
                        {">"}
                    </span>
                </div>
            </div>

            {modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )}
        </section>
    );
}

export default MovieListItem;
