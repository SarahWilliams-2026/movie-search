import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search-results?query=${query}`);
    };

    return (
        <div className="background__img">
            <div className="landing__content">
                <h1>Browse Our Movies</h1>
                <form className="input__wrap" onSubmit={handleSearch}>
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
            </div>
        </div>
    );
};

export default Home;