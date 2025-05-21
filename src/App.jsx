import { useTodasPeliculas } from './hooks/useObtenerTodasPeliculas.js';
import { FilaDePeliculas } from './components/FilaDePeliculas.jsx';
import { ModalTrailer } from './components/ui/ModalTrailer.jsx';
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
        {/* Modal para ver el trailer */}
        {mostrarTrailer && <ModalTrailer trailerKey = {trailerKey} funcion={setMostrarTrailer}/>}
        
        {/* Fila de peliculas de tendencias */}
        <FilaDePeliculas 
          peliculas ={peliculas.peliculasTendencias} 
          funcionVerTrailer={handleClickVerTrailer} 
          tituloSeccion='Tendencias' 
          esTendencia={true}
        />

        {/* Fila de peliculas a estrenar */}
        <FilaDePeliculas 
          peliculas={peliculas.peliculasEstrenar} 
          funcionVerTrailer={handleClickVerTrailer} 
          tituloSeccion='Prontamente en Cines' 
        />

        {/* Fila de peliculas populares */}
        <FilaDePeliculas 
          peliculas={peliculas.peliculasPopulares} 
          funcionVerTrailer={handleClickVerTrailer} 
          tituloSeccion='Más Populares'
        />

        {/* Fila de peliculas En cartelera */}
        <FilaDePeliculas 
          peliculas={peliculas.peliculasEnCartelera} 
          funcionVerTrailer={handleClickVerTrailer} 
          tituloSeccion='Ahora en Cines'
        />
      </main>
      <Footer />
    </>
  );
}
