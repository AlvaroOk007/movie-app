import { Card } from './ui/Card.jsx'
import {Link} from 'react-router-dom'
import './components-styles/FilaDePeliculas.css'
export function FilaDePeliculas({ peliculas,funcionVerTrailer,tituloSeccion,esTendencia=false,categoria }) {
  return (
    <>
      <div className="conteiner-title-section">
        <Link 
          to={`/peliculas/categoria/${categoria}`}
          className='title-section'>{tituloSeccion}
        </Link>
      </div>
      <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
        {peliculas &&
          peliculas.map((pelicula, index ) => (
            <Card
              key={pelicula.id}
              pelicula={pelicula}
              handleClick={funcionVerTrailer}
              indice = {index}
              esTendencia={esTendencia}
            />
          ))}
        <Link className='listado-peliculas-btn-mostrar-mas' to={`/peliculas/categoria/${categoria}`}>Ver Más</Link>
      </section>
    </>
  )
}
