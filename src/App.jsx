import { InicioPeliculas } from './pages/peliculas/InicioPeliculas.jsx';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { InicioSeries } from './pages/series/InicioSeries.jsx';
import { PeliculasCategorias } from './pages/peliculas/PeliculasCategorias.jsx';
export function App() {
  return (
    <Routes>
      <Route path="/home/peliculas" element={<InicioPeliculas/>} />
      <Route path='/home/series' element={<InicioSeries/>}/>
      <Route path='/peliculas/categoria/:categoria' element={<PeliculasCategorias />} />
      <Route path='*' element={<InicioPeliculas />} />
    </Routes>
  );
}
