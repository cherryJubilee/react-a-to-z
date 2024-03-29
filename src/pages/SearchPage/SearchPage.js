import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/axios.api";
import { useDebounce } from "../../hooks/useDebounce";

function SearchPage() {
    const [searchResults, setSearchResults] = useState("");

    //console.log("useLocation", useLocation());
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (searchTerm) => {
        console.log("searchTerm", searchTerm);
        try {
            const request = await apiClient.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            console.log(request);
            setSearchResults(request.data.results);
        } catch (error) {
            console.log("error", error);
        }
    };

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className="search-container">
                {searchResults.map((movie) => {
                    if (
                        movie.backdrop_path !== null &&
                        movie.media_type !== "person"
                    ) {
                        const movieImageUrl =
                            "https://image.tmdb.org/t/p/w500" +
                            movie.backdrop_path;
                        return (
                            <div className="movie" key={movie.id}>
                                <div className="movie__column-poster">
                                    <img
                                        src={movieImageUrl}
                                        alt="movie"
                                        className="movie__poster"
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
            </section>
        ) : (
            <section className="no-results">
                <div className="no-results__text">
                    <p>
                        찾고자하는 검색어"{debouncedSearchTerm}"에 맞는 영화가
                        없습니다.
                    </p>
                </div>
            </section>
        );
    };

    return renderSearchResults();
}

export default SearchPage;
