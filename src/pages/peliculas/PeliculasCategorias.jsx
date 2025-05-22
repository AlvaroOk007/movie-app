import { MainLayout } from '../../layouts/MainLayout.jsx';
import { useObtenerPeliculasPorCategoria } from '../../hooks/useObtenerPeliculasPorCategoria.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { traducirCategoria } from '../../utils/traducirCatergoria.js';
import { ListadoDeCards } from '../../components/ListadoDeCards.jsx';
import { ModalTrailer } from '../../components/ui/ModalTrailer.jsx'
import { Paginacion } from '../../components/ui/Paginacion.jsx'
export function PeliculasCategorias() {
  const { categoria} = useParams();
  const [numeroPagina, setNumeroPagina] = useState(1)
  const { categoriaTitle,categoriaConsulta} = traducirCategoria(categoria)
  const { peliculas } = useObtenerPeliculasPorCategoria(categoriaConsulta,numeroPagina)
  const [mostrarTrailer, setMostrarTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
  const handleClickVerTrailer = (trailerKey) => {
    setMostrarTrailer(true);
    setTrailerKey(trailerKey);
  };
  return (
    <>
      <MainLayout paginaActual='peliculas'>
        <main className='main-conteiner'>
          <div className="main-title-conteiner">
            <h2 className='main-title'>{categoriaTitle}</h2>
          </div>
          { mostrarTrailer && <ModalTrailer trailerKey={trailerKey} funcion={setMostrarTrailer} /> }      
          <ListadoDeCards 
          peliculas={peliculas}
          funcionVerTrailer={handleClickVerTrailer}
          />
          <Paginacion 
            numPage={numeroPagina}
            funcion={setNumeroPagina}
          />
        </main>
      </MainLayout>
    </>
  );
}
