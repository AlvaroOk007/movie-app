import { Card } from './ui/Card.jsx';
import './components-styles/ListadoDeCards.css'
export function ListadoDeCards({ peliculas,funcionVerTrailer }) {
  return (
      <section className="listado-pelicula-conteiner">
        {peliculas &&
        peliculas.map((pelicula) => (
          <Card
            key={pelicula.id}
            pelicula={pelicula}
            handleClick={funcionVerTrailer}
          />
        ))}
      </section>  
  );
}
