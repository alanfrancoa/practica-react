// import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()
  const handleClick = () => {
    const inputEl = inputRef.current
    const value = inputEl.value
    alert(value)
  }

  return (
      <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input ref = {inputRef} placeholder='Avengers,The Devil Wears Prada, Star Wars, The Matrix...'/>
        <button onClick={handleClick} type='submit'>Buscar</button>
        </form>
      </header> 

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
