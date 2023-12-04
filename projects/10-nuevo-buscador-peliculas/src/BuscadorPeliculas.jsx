import { useState } from "react"
const BuscadorPeliculas = () => {
                
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'd89b19a35a594eff707cba10d4728397'
    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPeliculas()
    }

    const fetchPeliculas = async () =>{
        try{
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data.results)
        }
        catch(error){
            console.log("Ha ocurrido un error: ", error)
        }
    }

  return (
    <div className="container">
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Busque una pelicula." 
            value={busqueda}
            onChange={handleInputChange}/>
            <button type="submit" className="search-button">🔎</button>
        </form>
        <div className="movie-list">
    {Array.isArray(peliculas) && peliculas.length > 0 ? (
        peliculas.map((pelicula) => (
            <div key={pelicula.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                <h2>{pelicula.title}</h2>
                <p>{pelicula.overview}</p>
            </div>
        ))
    ) : (
        <p>No se encontraron películas</p>
    )}
</div>
    </div>
  )
}

export default BuscadorPeliculas