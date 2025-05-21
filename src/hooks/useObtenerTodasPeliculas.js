import { useEffect, useState } from 'react'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

/*
  Obtener todas las peliculas tendencias, populares, estrenos, en cartelera
*/
export const useTodasPeliculas = ()=>{
  const [peliculasPopulares,setPeliculasPopulares] = useState()
  const [peliculasTendencias,setPeliculasTendencias] = useState()
  const [peliculasEstrenar,setPeliculasEstrenar] = useState()
  const [peliculasEnCartelera,setPeliculasEnCartelera] = useState()
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`)
    .then(res => res.json())
    .then((async (movies) => {
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
        setPeliculasPopulares(allMovies);
      })//setPeliculasPopulares(data))
    )
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=es-ES&page=1`)
    .then(res => res.json())
    .then((async (movies) => {
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
        setPeliculasTendencias(allMovies);
      })
    )//setPeliculasTendencias(data))
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-ES&page=1`)
    .then(res=>res.json())
    .then((async (movies) => {
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
        setPeliculasEstrenar(allMovies);
      })//setPeliculasEstrenar(data))
    )
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`)
    .then(res=>res.json())
    .then((async (movies) => {
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
        setPeliculasEnCartelera(allMovies);
      })
    )
  },[])
  return {
    peliculasPopulares,
    peliculasTendencias,
    peliculasEstrenar,
    peliculasEnCartelera
  }
}