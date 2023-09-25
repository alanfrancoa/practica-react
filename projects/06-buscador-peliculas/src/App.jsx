import { useEffect, useRef, useCallback } from 'react'
import { useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

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
  const [sort, setSort] = useState(false)
  const {search , updateSearch, error} = useSearch()
  const { movies, getMovies, loading } = useMovies({search , sort})
  
  const debouncedGetMovies  = useCallback(
    debounce(search => {
    console.log('search', search)
    getMovies({search})
  }, 500)
  , [getMovies]) 

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch) //cada vez que detecta un cambio en el imput 
  }

  return (
      <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} value={search} name ='query' placeholder='Avengers,The Devil Wears Prada, Star Wars, The Matrix...'/>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header> 

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
