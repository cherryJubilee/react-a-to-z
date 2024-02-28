import React from "react";
import moviesAPI from "../../api/movies/movies.api";
import MovieListItem from "../MovieListItem";

function MovieList() {
    return (
        <div className="bg-black text-2xl">
            <MovieListItem
                title="NETFLIX ORIGINALS"
                id="NETFLIX ORIGINALS"
                url={moviesAPI.getNetflixOriginals()}
                isLargeRow
            />
            <MovieListItem
                title="Trending Now"
                id="Trending Now"
                url={moviesAPI.getTrending()}
            />
            <MovieListItem
                title="Top Rated"
                id="Top Rated"
                url={moviesAPI.getTopRated()}
            />
            <MovieListItem
                title="Action Movies"
                id="Action Movies"
                url={moviesAPI.getActionMovies()}
            />
            <MovieListItem
                title="Comedy Movies"
                id="Comedy Movies"
                url={moviesAPI.getComedyMovies()}
            />
            <MovieListItem
                title="Horror Movies"
                id="Horror Movies"
                url={moviesAPI.getHorrorMovie()}
            />
        </div>
    );
}

export default MovieList;
