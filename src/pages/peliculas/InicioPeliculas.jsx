// Importacion de layouts
import { MainLayout } from '../../layouts/MainLayout.jsx';
// Importacion de componentes
import { FilaDePeliculas } from '../../components/FilaDePeliculas.jsx';
import { ModalTrailer } from '../../components/ui/ModalTrailer.jsx';
// Importacion de hooks
import { useState } from 'react'
import { useTodasPeliculas } from '../../hooks/useObtenerTodasPeliculas.js';
// Mi Funcion
export function InicioPeliculas() {
  const peliculas = useTodasPeliculas();
  const [mostrarTrailer, setMostrarTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
  const handleClickVerTrailer = (trailerKey) => {
    setMostrarTrailer(true);
    setTrailerKey(trailerKey);
  }
  return (
    <>
      <MainLayout paginaActual ='peliculas'>
        <main className='main-conteiner'>
          {/* Modal para ver el trailer */}
          {mostrarTrailer && (
            <ModalTrailer trailerKey={trailerKey} funcion={setMostrarTrailer} />
          )}
          {/* Fila de peliculas de tendencias */}
          <FilaDePeliculas
            peliculas={peliculas.peliculasTendencias}
            funcionVerTrailer={handleClickVerTrailer}
            tituloSeccion='Tendencias'
            esTendencia={true}
            categoria='tendencias'
          />
          {/* Fila de peliculas a estrenar */}
          <FilaDePeliculas
            peliculas={peliculas.peliculasEstrenar}
            funcionVerTrailer={handleClickVerTrailer}
            tituloSeccion='Prontamente en Cines'
            categoria='proximoEstreno'
          />
          {/* Fila de peliculas populares */}
          <FilaDePeliculas
            peliculas={peliculas.peliculasPopulares}
            funcionVerTrailer={handleClickVerTrailer}
            tituloSeccion='Más Populares'
            categoria='populares'
          />
          {/* Fila de peliculas En cartelera */}
          <FilaDePeliculas
            peliculas={peliculas.peliculasEnCartelera}
            funcionVerTrailer={handleClickVerTrailer}
            tituloSeccion='Ahora en Cines'
            categoria='ahoraEnCines'
          />
        </main>
      </MainLayout>
    </>
  );
}
