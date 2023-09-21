import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [ search, updateSearch ] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return // detecta si es la primera vez que se ejecuta, para no tirar error al comienzo
    }
    if  (search=== ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (search.length < 3){
      setError('la busqueda debe tener al menos tres caracteres')
      return
    }
    setError(null)
  }, [search])

  return {search, updateSearch, error}

}

function App() {
  const {search , updateSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
      <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name ='query' placeholder='Avengers,The Devil Wears Prada, Star Wars, The Matrix...'/>
        <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header> 

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
