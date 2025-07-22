import { useState } from 'react'
import {movieCards} from './moviecard'
import './App.css'

function App() {
  
  const watch_url = "https://www.netflix.com";  
  
  return (
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
  );
}

export default App
