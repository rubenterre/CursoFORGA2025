const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function load({ params }) {
  const movieId = params.id;
  
  const [detailsResponse, creditsResponse] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`),
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
  ]);

  return {
    movie: await detailsResponse.json(),
    cast: (await creditsResponse.json()).cast.slice(0, 5)
  };
}

