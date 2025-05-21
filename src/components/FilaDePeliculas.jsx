import { CardPelicula } from './ui/CardPelicula.jsx'
import './components-styles/FilaDePeliculas.css'
export function FilaDePeliculas({ peliculas,funcionVerTrailer,tituloSeccion,esTendencia=false }) {
  return (
    <>
      <div className="conteiner-title-section">
        <h2 className='title-section'>{tituloSeccion}</h2>
      </div>
      <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
        {peliculas &&
          peliculas.map((pelicula, index ) => (
            <CardPelicula
              key={pelicula.id}
              pelicula={pelicula}
              handleClick={funcionVerTrailer}
              indice = {index}
              esTendencia={esTendencia}
            />
          ))}
        <button>Ver Más</button>
      </section>
    </>
  )
}
