import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
                    <span className="white-text">Search results for "{location.search.split('=')[1]}"</span>
                </h2>
                <select id="sort" onChange={sortMovies}>
                    <option value="" disabled selected>Sort by year</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </div>
            <div>
                {movies.map(movie => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title} ({movie.Year})</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SearchResults;