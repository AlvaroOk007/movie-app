import './ModalTrailer.css'
export function ModalTrailer({trailerKey,funcion}){
  const handleClick = (funcion)=>{
    funcion(false)
  }
  return(
    <article className='conteiner-modal-trailer'>
      <button className='modal-btn-salir' onClick={()=>{handleClick(funcion)}}>×</button>
      <iframe src={`https://www.youtube.com/embed/${trailerKey}`} frameborder="0"></iframe>
    </article>
  )
}