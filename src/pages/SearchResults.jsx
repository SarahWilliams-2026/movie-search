import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Placeholder from '../Assets/no-image.png'


const SearchResults = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const sortMovies = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === "Newest") {
            setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.Year - a.Year));
        } else if (selectedOption === "Oldest") {
            setMovies((prevMovies) => [...prevMovies].sort((a, b) => a.Year - b.Year));
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('query');

        const fetchMovies = async () => {
            setLoading(true);
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=97a8a533`);
            setMovies(response.data.Search || []);
            setLoading(false);
        };

        fetchMovies();
    }, [location]);

    if (loading) return <p>Loading...</p>;

    return (
        <section id="searched">
            <div id="filter" className="content-wrapper justify-between">
                <h2 className="search--info">
                    <span className="white-text">Search results for "{decodeURIComponent(location.search.split('=')[1])}"</span>
                </h2>
                <select id="sort" onChange={sortMovies}>
                    <option value="" disabled defaultValue>Sort by year</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </div>
            <div className="movie-list">
                {movies.slice(0, 6).map(movie => (
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
                        <img
                            className="movie-card__poster"
                            src={movie.Poster !== "N/A" ? movie.Poster : Placeholder}
                            alt={`${movie.Title} poster`}
                        />
                        <div className="movie-card__container">
                            <h3>{movie.Title}</h3>
                            <p><b>Year:</b> {movie.Year}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SearchResults;