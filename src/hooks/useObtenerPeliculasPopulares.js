import { useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const useObtenerPeliculas = (numPage = 1) => {
  const [peliculas, setPeliculas] = useState();
  useEffect(() => {
    // Consulta a para las peliculas
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${numPage}`
    )
      .then((res) => res.json())
      .then(async (movies) => {
        const allMoviesPromises = movies.results.map(async (movie) => {
          const video = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=es-MX`
          );
          const videoDatos = await video.json();
          const trailerKey = videoDatos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube')
          return {
            ...movie,
            trailerKey: trailerKey?.key,
          };
        });
        const allMovies = await Promise.all(allMoviesPromises);
        setPeliculas(allMovies);
      });
  }, [numPage]);
  return {peliculas,setPeliculas}
};
