import './components-styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
export function Header({paginaActual}){
  return(
    <header className='header-container' id='Inicio'>
      <Link to='/home/peliculas'className="header-logo-container">
        <img src={logo} alt="Logo de mi página" className='logo-animation'/>
      </Link>
      <nav className='header-nav-conteiner'>
        <ul className='header-nav-lista'>
          <Link 
            to={'/home/peliculas'}
            className={`header-nav-lista-item ${paginaActual === 'peliculas' ? 'seccion-actual' : ''}`}>
              Peliculas
          </Link>
          <Link 
            to={'/home/series'}
            className={`header-nav-lista-item ${paginaActual === 'series' ? 'seccion-actual' : ''}`}>
              Series
          </Link>
        </ul>
      </nav>
    </header>
  )
}