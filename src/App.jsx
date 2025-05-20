import { CardPelicula } from './components/CardPelicula.jsx';
import { useObtenerPeliculas } from './hooks/obtenerPeliculas.js';
import { ModalTrailer } from './components/ModalTrailer.jsx';
import { Header } from './components/Header.jsx';
import './App.css';
import { useState } from 'react';
export function App() {
  const { peliculas } = useObtenerPeliculas();
  const [mostrarTrailer, setMostrarTrailer] = useState(false)
  const [trailerKey,setTrailerKey] = useState('')
  const handleClickVerTrailer = (trailerKey) =>{
    setMostrarTrailer(true)
    setTrailerKey(trailerKey)
  }
  return (
    <>
      <Header />
      <main className='main-conteiner'>
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
    </>
  );
}
