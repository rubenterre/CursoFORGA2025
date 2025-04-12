const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function load() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return {
    movies: data.results
  };
}
