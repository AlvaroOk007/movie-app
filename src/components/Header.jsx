import './components-styles/Header.css'
export function Header(){
  return(
    <header className='header-container' id='Inicio'>
      <div className="header-logo-container">
        <img src='/logo.png' alt="" />
      </div>
      <nav className='header-nav-conteiner'>
        <ul className='header-nav-lista'>
          <li className='header-nav-lista-item seccion-actual'>Peliculas</li>
          <li className='header-nav-lista-item'>Series</li>
        </ul>
      </nav>
    </header>
  )
}