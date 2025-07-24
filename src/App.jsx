import { useState } from 'react'
import {movieCards} from './moviecard'
import './App.css'

function App() {
  
  const watch_url = "https://www.netflix.com";  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">Netflix</div>
          <div className="navbar-buttons">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Series</button>
            <button className="nav-btn">Movies</button>
            <button className="nav-btn">My List</button>
          </div>
        </div>
      </nav>
      <div className="app-container">
        {movieCards.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <h4>{movie.genre.join(", ")}</h4>
            <p>⭐ {movie.rating} | {movie.year} | {movie.ageLimit}</p>
            <p>{movie.description}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer" className="watch-button">
              Watch
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
