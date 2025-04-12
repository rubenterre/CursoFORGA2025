<script>
	export const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
	import generosJSON from '$lib/generos.json';
	
	console.log(generosJSON);
	
	const genreMap = Object.fromEntries(generosJSON.genres.map((g) => [g.id, g.name]));
	
	let trending = [];
	
	const fetchtrendingMovies = async () => {
	  try {
		const response = await fetch(
		  `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=es-ES`
		);
		const data = await response.json();
	
		trending = data.results.map((item) => ({
		  ...item,
		  genre_names: item.genre_ids.map((id) => genreMap[id] ?? 'Desconocido'),
		}));
	
		console.log(trending);
	  } catch (error) {
		console.error('Error al obtener las películas trendinges:', error);
	  }
	};
	
	fetchtrendingMovies();
	
	</script>
	
	<section class="main">
	  <div class="main__titular">
		<h2 class="main__h2">
		  Tendencias
		</h2>
		<img class="main__flecha" src="./icons/flecha.svg" alt="Icono de flecha indicando que hay más contenido">
	  </div>
	
		<div class="main__container">
		  {#if trending.length > 0}
			{#each trending as item}
			  <div class="card">
				<img class="card__img" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="{item.title}" loading="lazy">
				<h4 class="card__h4">{item.title}</h4>
							<p class="card__p"> {item.genre_names.join(', ')} </p>
			  </div>
			  {/each}
			{:else}
			  <h2>No hay películas en tendencia</h2>
			{/if}
		</div>
	  </section>
	
	<style>
	
	
	.main__titular{
	  display: flex;
	  justify-content: space-between;
	  padding: .8rem 2rem
	}
	
	.main__container{
	  display: flex;
		gap: 1rem;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
	}
	
	.card{
	  width: 120px;
	  margin: 1rem 0px;
	  scroll-snap-align: start;
	  flex: 0 0 auto;
	}
	
	.card__img{
	border-radius: 16px;
	width: 120px;
	}
	
	.card__h4{
	  font-family: var(--font-primary);
	  font-size: .8rem;
	  font-weight: 700;
	}
	
	.card__p{
	  font-family: var(--font-primary);
	  font-size: .6rem;
	}
	
	
	
	</style>
	