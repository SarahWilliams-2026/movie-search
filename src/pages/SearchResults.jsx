import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Results = () => {
    return (
        <div class="landing__content">
            <h1>Browse Our Movies</h1>
            <form class="input__wrap" onsubmit="searchMovies(event)" role="search">
                <input type="search" id="site-search" name="q" placeholder="Search by title" required />
                <button class="search__btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}

export default Results;