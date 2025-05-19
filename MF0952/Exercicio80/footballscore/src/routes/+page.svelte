<script>
	const equiposURL =
		'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga';

	let listaEquipos = [];

	    async function cargarEquipos() {
        try {
            const response = await fetch(equiposURL);
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            const data = await response.json();
            listaEquipos = data.teams || []; 
        } catch (error) {
            console.error('Error al obtener los equipos:', error);
        }
    }

    // Llamar a la función al cargar el componente
    cargarEquipos();
</script>

<section class="clubs">
	<div class="clubs__title">
		<img class="clubs__logo" src="logo_footballscore-element.svg" alt="Logo de FootballScore app">
		<h4 class="clubs__h4">Escolle o teu clube</h4>
	</div>
	<div class="clubs__selection">
		{#each listaEquipos as equipo}
            <a href="{`/equipo/${equipo.idTeam}`}" class="clubs__box">
				<div class="clubs__badge">
					<img src={equipo.strBadge} alt={equipo.strTeam} class="clubs__img" />
				</div>
				<p class="clubs__p">{equipo.strTeam}</p>
			</a>
		{/each}
	</div>
</section>

<style>
	.clubs {
		width: 100vw;
		padding: 3.6rem 0rem;
	}

	.clubs__logo{
		width: 64px;
	}

	.clubs__title {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 2rem;
		flex-direction: column;
		gap: 1rem;
	}

	.clubs__h4 {
		font-family: var(--font-tertiary);
		font-size: 1.3rem;
	}

	.clubs__selection {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.clubs__box {
		display: flex;
		flex-direction: column;
		align-items: center;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
	}

	.clubs__badge {
		background: var(--color-secondary);
        border:2px solid var(--color-bg);
		border-radius: 50%;
		width: 94px;
		height: 94px;
		margin: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.clubs__badge:active {
		background: var(--color-gradient);
	}

	.clubs__img {
		width: 64px;
	}

	.clubs__p {
		font-family: var(--font-primary);
		color: var(--color-primary);
		font-size: 0.6rem;
		font-weight: 600;
	}
</style>
