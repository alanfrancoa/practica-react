import PropTypes from 'prop-types';

function MoviesList({ movies }) {
    return (
      <ul className='movies'>
      {
        movies.map( movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title}/>
          </li>
        ))
      }
    </ul>
    )
}
function NoMoviesResult () {
    return (
      <p>No se han encontrado resultados para su búsqueda.</p>
    )
}


export function Movies ({movies}) {
    const hasMovies = movies?.length > 0
    return (
         hasMovies ? ( <MoviesList movies = {movies}/> ) : ( <NoMoviesResult /> ) 
    )
    
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired, // Asegura que 'movies' sea un array y sea requerido en la funcionMoviesList
  };

Movies.propTypes = {
    movies: PropTypes.array.isRequired, // Asegura que 'movies' sea un array y sea requerido en la funcion Movies. 
  };
  
  export default Movies;
