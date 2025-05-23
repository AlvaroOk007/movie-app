import './ui-styles/CardPelicula.css'
export function Card({ pelicula,handleClick,indice = 0, esTendencia = false}) {
  return (
    <article className='card-conteiner'>
      <div className='card-header'>
        <div className="button-conteiner">
          <button className='card-header-button' onClick={()=>{handleClick(pelicula.trailerKey)}}>Ver Trailer</button>
        </div>
        {esTendencia &&
          <p className='card-header-num-tendencia'>
            <span className='card-header-num-tendencia-numeral'>#</span>
            {indice+1}
          </p>
        }
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
