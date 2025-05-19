<!-- <script>
	import Header from '$lib/Components/Header.svelte';

	const todosPartidosURL =
		'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4335&s=2024-2025';

	let equipos = [];

	async function cargarDashboard() {
		try {
			const response = await fetch(todosPartidosURL);
			if (!response.ok) {
				throw new Error(`Error en la respuesta: ${response.status}`);
			}
			const data = await response.json();
			equipos = data.events || [];
		} catch (error) {
			console.error('Error al obtener los equipos:', error);
		}
	}

	cargarDashboard();

	
</script> -->
<script>
	import Header from '$lib/Components/Header.svelte';
	export let data;
</script>

<Header title="Dashboard"></Header>

<section class="dashboard">
	<div class="dashboard__titles">
		<p class="dashboard__p">
			En esta sección podrás encontrar los <strong>resultados de los últimos partidos</strong> de La
			Liga española de fútbol.
		</p>
	</div>
	<div class="dashboard__container">
		<div class="dashboard__title">
			<h3 class="dashboard__h3">Últimos resultados:</h3>
		</div>
		<div class="dashboard__cards">
			{#each data.events as equipo}
				<div class="dashboard__card">
					<div class="dashboard__event">
						<p class="dashboard__p">
							{#if equipo.dateEventLocal}
								{new Intl.DateTimeFormat('es-ES', {
									day: 'numeric',
									month: 'long',
									year: 'numeric'
								}).format(new Date(equipo.dateEventLocal))}
							{/if}
						</p>
					</div>
					<div class="dashboard__details">
						<div class="dashboard__team">
							<span class="dashboard__team-name">{equipo.strHomeTeam}</span>
							<img src={equipo.strHomeTeamBadge} alt={equipo.strHomeTeam} class="dashboard__img" />
						</div>

						<div class="dashboard__results">
							<span class="dashboard__score">{equipo.intHomeScore}</span>
							<span class="dashboard__score">-</span>
							<span class="dashboard__score">{equipo.intAwayScore}</span>
						</div>

						<div class="dashboard__team dashboard__team--away">
							<img src={equipo.strAwayTeamBadge} alt={equipo.strAwayTeam} class="dashboard__img" />
							<span class="dashboard__team-name">{equipo.strAwayTeam}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.dashboard {
		padding: 1rem 2rem 2rem 2rem;
	}

	.dashboard__p {
		font-family: var(--font-primary);
		font-size: 0.9rem;
		text-align: center;
	}

	.dashboard__title {
		padding: 1.5rem 0px;
	}

	.dashboard__h3 {
		text-transform: uppercase;
		font-family: var(--font-secondary);
		text-align: center;
	}

	.dashboard__cards {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0px;
		padding: 0px;
	}

	.dashboard__details {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1.5fr;
		align-items: center;
		background-color: var(--color-bg);
		border-radius: 12px;
		margin: 1rem 0px;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
	}

	.dashboard__team {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		overflow: hidden;
		justify-content: flex-end;
	}

	.dashboard__team--away {
		justify-content: flex-start;
	}

	.dashboard__img {
		width: 38px;
		height: 38px;
		object-fit: contain;
		background: #fff;
		border-radius: 50%;
		border: 1px solid #eee;
	}

	.dashboard__team-name {
		font-family: var(--font-primary);
		font-size: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 110px;
	}

	.dashboard__results {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-accent);
		color: var(--color-primary);
		padding: 0.4rem 1rem;
		border-radius: 12px;
		gap: 0.5rem;
	}

	.dashboard__score {
		font-size: 1.1rem;
		font-weight: bold;
	}
</style>
