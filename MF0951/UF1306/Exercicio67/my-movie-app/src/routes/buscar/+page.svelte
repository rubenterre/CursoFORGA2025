<script>
	import Nav from '$lib/components/Nav.svelte';
	import generosJSON from '$lib/generos.json';
	const genreMap = Object.fromEntries(generosJSON.genres.map((g) => [g.id, g.name]));

	const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
	let searchTerm = '';
	let movies = [];

	const searchMovies = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=es-ES`
		);
		const data = await response.json();

		movies = data.results.map((movie) => ({
			...movie,
			genre_names: movie.genre_ids.map((id) => genreMap[id] ?? 'Desconocido')
		}));
	};
</script>

<main class="main">
	<div class="buscador">
		<img class="buscador__lupa" src="./icons/lupa.svg" alt="Icono de lupa de buscar" />
		<input class="buscador__input" bind:value={searchTerm} placeholder="Buscador para películas" />
		<button class="buscador__button" on:click={searchMovies}>BUSCAR</button>
	</div>

	<section id="buscar" class="buscar">
		<div class="buscar__titular">
			<h4 class="buscar__h4">Películas atopadas</h4>
		</div>

		{#if movies.length > 0}
			<div class="movies">
				{#each movies as movie (movie.id)}
					<div class="movies__card">
						<div class="movies__posters">
							<img
								class="movies__img"
								src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
								alt={movie.title}
							/>
						</div>
						<div class="movies__details">
							<h4 class="movies__h4">{movie.title}</h4>
							<p class="movies__p">{movie.release_date}</p>
							<div class="movies__pills">
								<p class="movies__genre">{movie.genre_names}</p>
							</div>
							<div class="movies__rates">
								<img class="movies__star" title="Puntuación de los usuarios" src="./icons/star.svg" alt="Estrella de puntuación">
								<p class="movies__rate">{movie.vote_average}</p>
							</div>
							<p class="movies__p">{movie.overview}</p>
							<a class="movies__a" href="/buscar/{movie.id}">Ver más ></a>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="movies__error">
				<p>No se encontraron películas</p>
			</div>
		{/if}
	</section>
</main>

<Nav></Nav>

<style>
	.main {
		padding: 1rem 2rem;
	}

	.buscador {
		border: 1px solid var(--color-primary);
		border-radius: 28px;
		height: 56px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.buscador__lupa {
		height: 15px;
		margin-left: 1rem;
	}

	.buscador__input {
		width: 100%;
		background-color: var(--color-black);
		border: 0px;
		color: var(--color-primary);
		padding-left: 1rem;
	}

	.buscador__button {
		background-color: var(--color-blue);
		color: var(--color-primary);
		width: 120px;
		height: 41px;
		border-radius: 20.5px;
		margin-right: 0.5rem;
	}

	/* Buscar */

	.buscar {
		margin-top: 2rem;
	}

	.buscar__h4 {
		font-family: var(--font-secondary);
		font-size: 1.2rem;
	}

	.movies__card {
		display: flex;
		gap: 1rem;
		margin: 1rem 0px;
	}

	.movies__img {
		width: 120px;
		border-radius: 16px;
	}
	.movies__details {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.3rem;
		padding: .5rem 0px;
	}
	.movies__h4 {
		font-family: var(--font-secondary);
		font-size: 0.9rem;
		color: var(--color-primary);
	}

	.movies__pills {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		font-size: 0.7rem;
	}

	.movies__rates{
		display: flex;
		gap: 5px;
	}

	.movies__p {
		font-size: 0.8rem;
		max-height: 3em; /* 2 líneas (1.5em x 2) */
		line-height: 1.5em;
		overflow: hidden;
		position: relative;
	}

	.movies__p::after {
		content: '...';
		position: absolute;
		bottom: 0;
		right: 0;
		padding-left: 0.5rem;
	}

	.movies__error p {
		font-family: var(--font-primary);
		font-size: 1rem;
		margin-top: 1rem;
	}

	.movies__a{
		font-family: var(--font-primary);
		color: var(--color-grey);
		font-size: 1rem;
		text-decoration: none;
	}
</style>
