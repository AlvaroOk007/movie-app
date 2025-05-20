import './CardPelicula.css'
export function CardPelicula({ pelicula,handleClick }) {
  return (
    <article className='card-conteiner'>
      <div className='card-header'>
        <div className="button-conteiner">
          <button className='card-header-button' onClick={()=>{handleClick(pelicula.trailerKey)}}>Ver Trailer</button>
        </div>
        <img
          src={'https://image.tmdb.org/t/p/original/' + pelicula.poster_path}
          alt=''
        />
      </div>
      <div className='card-body'>
        <h2>{pelicula.title}</h2>
      </div>
    </article>
  )
}
