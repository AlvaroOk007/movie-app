import './Header.css'
export function Header(){
  return(
    <header className='header-container'>
      <div className="header-logo-container">
        <img src='../../public/logo.png' alt="" />
      </div>
      <nav className='header-nav-conteiner'>
        <ul className='header-nav-lista'>
          <li className='header-nav-lista-item seccion-actual'>Peliculas</li>
          <li className='header-nav-lista-item'>Series</li>
          <li className='header-nav-lista-item'></li>
          <li className='header-nav-lista-item'></li>
        </ul>
      </nav>
    </header>
  )
}