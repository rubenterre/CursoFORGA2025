<script>
	import Header from '$lib/Components/Header.svelte';

	export let data;
	const { equipo } = data;

	// Formatear la fecha
	let fechaFormateada = '';
	if (equipo?.dateEventLocal) {
		const fecha = new Date(equipo.dateEventLocal);
		fechaFormateada = new Intl.DateTimeFormat('es-ES', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(fecha);
	}

	// Convertir status

	let status = '';

	if ((equipo.strStatus = 'FT')) {
		status = 'Finalizado';
	} else {
		status = 'En juego';
	}

	 // Formatear la hora
    let horaFormateada = '';
    if (equipo?.strTimeLocal) {
        const [hora, minutos] = equipo.strTimeLocal.split(':');
        horaFormateada = `${hora}:${minutos}h`;
    }
</script>

<Header title="Último partido"></Header>

<section class="team">
	{#if equipo}
	<div class="team__titles">
		<h4 class="team__h4">{fechaFormateada}</h4>
	</div>

		<div class="team__resultado">
			<div class="team__box">
				<div class="team__badge">
					<img src={equipo.strHomeTeamBadge} alt={equipo.strHomeTeam} class="team__img" />
									<p class="team__p">{equipo.strHomeTeam}</p>

				</div>
			</div>
			<div class="team__container">
				<div class="team__box">
					<h2 class="team__h2">
						{equipo.intHomeScore}
					</h2>
					<h2 class="team__h2">-</h2>
					<h2 class="team__h2">
						{equipo.intAwayScore}
					</h2>
				</div>
				<div class="team__box-center">
					<p class="team__p--status">{status}</p>
				</div>
			</div>

			<div class="team__box">
				<div class="team__badge">
					<img src={equipo.strAwayTeamBadge} alt={equipo.strAwayTeam} class="team__img" />
									<p class="team__p">{equipo.strAwayTeam}</p>

				</div>
			</div>
		</div>
		<div class="details">
			<div class="details__title">
				<h4 class="details__h4">Estadísticas do partido</h4>
			</div>
			<div class="details__container">
				<div class="details__card">
					<div class="details__name">
						<h3 class="details__h3">Hora de inicio</h3>
					</div>
					<div class="details__dato">
						<p class="details__p">{horaFormateada}</p>
					</div>
				</div>

				<div class="details__card">
					<div class="details__name">
						<h3 class="details__h3">Jornada</h3>
					</div>
					<div class="details__dato">
						<p class="details__p">{equipo.intRound}</p>
					</div>
				</div>

				<div class="details__card">
					<div class="details__name">
						<h3 class="details__h3">Temporada</h3>
					</div>
					<div class="details__dato">
						<p class="details__p">{equipo.strSeason}</p>
					</div>
				</div>

				<div class="details__card">
					<div class="details__name">
						<h3 class="details__h3">Competición</h3>
					</div>
					<div class="details__dato">
						<img class="team__img" src="{equipo.strLeagueBadge}" alt="{equipo.strLeague}">
					</div>
				</div>
						
				<div class="details__poster" style="background-image: url('{equipo.strThumb}');">
				</div>
			</div>
		</div>
	{:else}
		<p>Cargando datos del equipo o equipo no encontrado...</p>
	{/if}
</section>

<style>
	/* Team */
	.team {
		padding: 1rem 2rem 2rem 2rem;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100vw;
	}

	.team__titles{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.team__p--status {
		color: greenyellow;
		font-family: var(--font-secondary);
	}

	.team__resultado {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.team__box {
		display: flex;
		gap: 1rem;
	}

	.team__box{
		display: flex;
		justify-content: center;
	}

	.team__badge {
		background: var(--color-secondary);
		border: 2px solid var(--color-bg);
		border-radius: 50%;
		width: 94px;
		height: 94px;
		margin: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		padding-top: 2.2rem;
	}

	.team__badge:active {
		background: var(--color-gradient);
	}

	.team__img {
		width: 64px;
	}

	.team__h2 {
		font-size: 1.5rem;
	}

	/* Details */

	.details{
		padding-top: 2rem;
	}

	.details__h4 {
		font-size: 1.2rem;
		margin: 1.7rem 0rem 1.3rem 0rem;
		font-family: var(--font-tertiary);
	}

	.details__h3{
		font-size: .9rem;
	}

	.details__p{
		font-size: 1rem;
	}

	.details__container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.details__card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		border: 1px solid var(--color-bg);
		padding: 0.5rem 1rem;
		border-radius: 12px;
		background: var(--color-bg);
	}

	.details__poster{
		width: 100%;
		height: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 12px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
