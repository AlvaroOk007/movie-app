export function traducirCategoria(categoria){
  let categoriaTitle,categoriaConsulta = ''
  switch (categoria){
    case 'tendencias':
      categoriaConsulta = 'top_rated'
      categoriaTitle = 'Tendencias'
      break
    case 'proximoEstreno':
      categoriaConsulta = 'upcoming'
      categoriaTitle = 'Proximamente en Cines'
      break
    case 'populares':
      categoriaConsulta = 'popular'
      categoriaTitle = 'Los mas populares'
      break
    case 'ahoraEnCines':
      categoriaConsulta = 'now_playing'
      categoriaTitle='Ahora en cines'
      break
    default:
      categoriaConsulta = 'top_rated' 
      categoriaTitle = 'Tendencias'
      break
  }
  return {categoriaTitle,categoriaConsulta}
}