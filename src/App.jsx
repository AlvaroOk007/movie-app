import { CardPelicula } from './components/CardPelicula.jsx';
import { useTodasPeliculas } from './hooks/useObtenerTodasPeliculas.js';
import { ModalTrailer } from './components/ModalTrailer.jsx';
import { Header } from './components/Header.jsx';
import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer.jsx';
export function App() {
  const peliculas  = useTodasPeliculas();
  const [mostrarTrailer, setMostrarTrailer] = useState(false)
  const [trailerKey,setTrailerKey] = useState('')
  const handleClickVerTrailer = (trailerKey) =>{
    setMostrarTrailer(true)
    setTrailerKey(trailerKey)
  }
  return (
    <>
      <Header />
      <main className='main-conteiner' >
        <div className="conteiner-title-section">
          <h2 className='title-section'>Tendencias de la semana</h2>
        </div>
        {mostrarTrailer && <ModalTrailer trailerKey = {trailerKey} funcion={setMostrarTrailer}/>}
        <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
          {peliculas.peliculasTendencias &&
            peliculas.peliculasTendencias.map((pelicula) => (
              <CardPelicula 
                key={pelicula.id} 
                pelicula={pelicula} 
                handleClick= {handleClickVerTrailer}
              />
            ))}
          <button>Ver Más</button>
        </section>
        <div className="conteiner-title-section">
          <h2 className='title-section'>Próximos Estrenos</h2>
        </div>
        <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
          {peliculas.peliculasEstrenar &&
            peliculas.peliculasEstrenar.map((pelicula) => (
              <CardPelicula 
                key={pelicula.id} 
                pelicula={pelicula} 
                handleClick= {handleClickVerTrailer}
              />
            ))}
          <button>Ver Más</button>
        </section>
        <div className="conteiner-title-section">
          <h2 className='title-section'>Más populares</h2>
        </div>
        <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
          {peliculas.peliculasPopulares &&
            peliculas.peliculasPopulares.map((pelicula) => (
              <CardPelicula 
                key={pelicula.id} 
                pelicula={pelicula} 
                handleClick= {handleClickVerTrailer}
              />
            ))}
          <button>Ver Más</button>
        </section>
        <div className="conteiner-title-section">
          <h2 className='title-section'>Ahora en Cines </h2>
        </div>
        <section className='conteiner-listado-peliculas scroll-bar-conteiner'>
          {peliculas.peliculasEnCartelera &&
            peliculas.peliculasEnCartelera.map((pelicula) => (
              <CardPelicula 
                key={pelicula.id} 
                pelicula={pelicula} 
                handleClick= {handleClickVerTrailer}
              />
            ))}
          <button>Ver Más</button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
