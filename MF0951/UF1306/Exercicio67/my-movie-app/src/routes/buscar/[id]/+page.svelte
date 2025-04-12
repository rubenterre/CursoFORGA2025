<script>
	import Casting from "$lib/components/Casting.svelte";

	export let data;
	const { movie, cast } = data;
	console.log(movie);

	const genres = movie.genres || [];
</script>

<article class="detalles" style="background-image: linear-gradient(180deg, rgba(20,20,24,0.00) 0%, rgba(20,20,24,0.50) 22%, #141418 75%), url(https://image.tmdb.org/t/p/w500/{movie.backdrop_path});">
	<div class="detalles__header">
		<a href="/buscar">
			<img class="detalles__img" src="/icons/atras.svg" alt="Flecha para atrás" />
		</a>
	</div>
	<div class="detalles__backdrop">
		<img
			class="detalles__poster"
			src="https://image.tmdb.org/t/p/w500/{movie.poster_path}"
			alt={movie.title}
		/>
	</div>
	<div class="detalles__container">
		<h3 class="detalles__title">{movie.title}</h3>
		<p class="detalles__fecha">{movie.release_date}</p>
		<p class="detalles__p">{movie.overview}</p>
		<div class="detalles__rates">
			<img class="detalle__star" src="/icons/star.svg" alt="Estrella de puntuación de usuarios" />
			<p class="detalle__rate">{movie.vote_average}</p>
		</div>
		<div class="detalles__pills">
            {#each genres as item}
            <span class="detalles__pill">
              {item.name}
            </span>
          {/each}
		</div>
        <div class="detalles__datos">
            <div class="detalles__box">
                <h4 class="detalles__h4">
                    Duración:
                </h4>
                <p class="detalles__p">
                    {movie.runtime} minutos
                </p>
            </div>
            <div class="detalles__box">
                <h4 class="detalles__h4">
                    Idioma original:
                </h4>
                <p class="detalles__p">
                    {movie.original_language.toUpperCase()}
                </p>
            </div>
            <div class="detalles__box">
                <h4 class="detalles__h4">
                    Título original:
                </h4>
                <p class="detalles__p">
                    {movie.original_title}
                </p>
            </div>
            <div class="detalles__box">
                <h4 class="detalles__h4">
                    Estado:
                </h4>
                <p class="detalles__p">
                    {movie.status}
                </p>
            </div>

        </div>
	</div>

    <Casting {data} />
</article>

<style>

.detalles{
/*     background: url(https://image.tmdb.org/t/p/w500/{movie.backdrop_path});
 */
 background-repeat: no-repeat;
 background-position: top;
 background-size: cover;
 height: 35vh;
padding: 1rem 2rem;
}

.detalles__backdrop{
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
}

.detalles__poster{
    width: 150px;
    border-radius: 16px;
}

.detalles__title{
    color: #FFF;
font-family: var(--font-secondary);
font-size: 1.5rem;
font-weight: 700;
margin-bottom: .5rem;
}

.detalles__fecha{
    font-family: var(--font-primary);
    margin-bottom: .5rem;
    color: var(--color-grey);


    &::before{
        content:"| ";
        color: yellow;
    }
}

.detalles__p{
    font-family: var(--font-primary);
    font-size: .9rem;
    margin-bottom: .5rem;
}

.detalles__rates{
    display: flex;
    gap: .5rem;
    margin-bottom: 1.5rem;
}

.detalles__pills{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 2rem;
}

.detalles__pill{
    border-radius: 12px;
background: rgba(254, 254, 254, 0.10);
width: fit-content;
height: 38px;
border-radius: 16px;
padding: 10px 20px;
font-family: var(--font-secondary);
font-size: .8rem;
display: flex;
align-items: center;
justify-content: center;
}

.detalles__datos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.detalles__h4{
    font-family: var(--font-secondary);
    font-size: 1rem;
}

</style>