import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

function AppContent() {
  const location = useLocation();

  const isMovieDetails =
    location.pathname.startsWith('/movie/');

  return (
    <>
      {!isMovieDetails && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
