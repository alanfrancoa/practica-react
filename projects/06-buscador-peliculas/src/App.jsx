// import { useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import responseMovies from './mocks/whit-results.json'
// import withoutResults from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return (
      <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers,The Devil Wears Prada, Star Wars, The Matrix...'/>
        <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
