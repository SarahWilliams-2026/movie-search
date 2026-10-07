import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=97a8a533`);
                setMovie(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details">
            <img className="movie-card__poster" src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="movie-card__container">
                <h3>{movie.Title}</h3>
                <p><b>Rated:</b> {movie.Rated}</p>
                <p><b>Year:</b> {movie.Year}</p>
                <p><b>Plot:</b> {movie.Plot}</p>
            </div>
        </div>
    );
};

export default MovieDetails;