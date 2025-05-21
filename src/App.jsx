import { CardPelicula } from './components/CardPelicula.jsx';
import { useObtenerPeliculas } from './hooks/useObtenerPeliculasPopulares.js';
import { ModalTrailer } from './components/ModalTrailer.jsx';
import { Header } from './components/Header.jsx';
import './App.css';
import { Filtros } from './components/Filtros.jsx'
import { useState } from 'react';
import { Footer } from './components/Footer.jsx';
import { Paginacion } from './components/Paginacion.jsx';
export function App() {
  const [numPage, setNumPage] = useState(1) 
  const { peliculas } = useObtenerPeliculas(numPage);
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
        <Filtros />
        <div className="conteiner-title-section">
          <h2 className='title-section'>Peliculas </h2>
          <div className="title-line"></div>
        </div>
        {mostrarTrailer && <ModalTrailer trailerKey = {trailerKey} funcion={setMostrarTrailer}/>}
        <section className='conteiner-listado-peliculas'>
          {peliculas &&
            peliculas.map((pelicula) => (
              <CardPelicula 
                key={pelicula.id} 
                pelicula={pelicula} 
                handleClick= {handleClickVerTrailer}
              />
            ))}
        </section>
      </main>
      <Paginacion numPage={numPage} funcion={setNumPage} />
      <Footer></Footer>
    </>
  );
}
