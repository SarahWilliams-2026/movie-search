import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Home = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`/search?query=${query}`);

        return (
            <>
                <h1>Browse Our Movies</h1>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                        placeholder="Search for a movie..." 
                    />
                    <button className="search__btn" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </>
    )};
};

export default Home;