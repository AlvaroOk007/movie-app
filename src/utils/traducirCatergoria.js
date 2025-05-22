export function traducirCategoria(categoria){
  let categoriaTitle,categoriaConsulta = ''
  switch (categoria){
    case 'tendencias':
      categoriaConsulta = 'trending/movie/week'
      categoriaTitle = 'Tendencias de la semana'
      break
    case 'proximoEstreno':
      categoriaConsulta = 'movie/upcoming'
      categoriaTitle = 'Proximamente en Cines'
      break
    case 'populares':
      categoriaConsulta = 'movie/popular'
      categoriaTitle = 'Los mas populares'
      break
    case 'ahoraEnCines':
      categoriaConsulta = 'movie/now_playing'
      categoriaTitle='Ahora en cines'
      break
    default:
      categoriaConsulta = 'trending/movie/week' 
      categoriaTitle = 'Tendencias de la semana'
      break
  }
  return {categoriaTitle,categoriaConsulta}
}