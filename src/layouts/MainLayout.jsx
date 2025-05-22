import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import './MainLayout.css'
export function MainLayout({children,paginaActual}){
  return(
    <>
      <Header paginaActual={paginaActual}/>
      { children }
      <Footer/>
    </>
  )
}