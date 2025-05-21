import './Paginacion.css'
export function Paginacion({numPage,funcion}){
  const handleClick = (op)=>{
    funcion(numPage + op)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return(
    <section className='paginacion-contenedor'>
      <button href= "#Inicio"className= {`paginacion-btn ${numPage===1 ? 'btn-disactivado':''}`}onClick={()=>{handleClick(-1)}} disabled={numPage === 1} > {"<"} </button>
      <span className='paginacion-num'>{numPage}</span>
      <button href= "#Inicio"className= 'paginacion-btn'onClick={()=>{handleClick(+1)}}> {">"} </button>
    </section>
  )
}