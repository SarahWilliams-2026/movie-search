import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PopcornPiece from '../Assets/single.pop.png';
import PopcornBucket from '../Assets/popcorn.bucket.png';

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
        <div className="title">
            <img
                className="poster__img"
                src={movie.Poster}
                alt={`${movie.Title} poster`}
            />
            <div className="title__name">
                <img className="bucket__icon" src={PopcornBucket} alt="" />
                {movie.Title}
            </div>
            <p className="title__body">
                {movie.Plot}
            </p>
            <div className="other__info">
                <p><img className="info__icon" src={PopcornPiece} alt="" /> <b>Year:</b> {movie.Year}</p>
                <p><img className="info__icon" src={PopcornPiece} alt="" /> <b>Rated:</b> {movie.Rated}</p>
                <p><img className="info__icon" src={PopcornPiece} alt="" /> <b>Genre:</b> {movie.Genre}</p>
                <p><img className="info__icon" src={PopcornPiece} alt="" /> <b>Runtime:</b> {movie.Runtime}</p>
            </div>
        </div>
    );
};

export default MovieDetails;