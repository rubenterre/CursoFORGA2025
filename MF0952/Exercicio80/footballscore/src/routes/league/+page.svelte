<script>
	import Header from '$lib/Components/Header.svelte';

	const clasificacionURL = `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4335&s=2024-2025`;

	let equipos = [];

	async function cargarClasificacion() {
		try {
			const response = await fetch(clasificacionURL);
			if (!response.ok) {
				throw new Error(`Error en la respuesta: ${response.status}`);
			}
			const data = await response.json();
			equipos = data.table || [];
		} catch (error) {
			console.error('Error al obtener los equipos:', error);
		}
	}

	cargarClasificacion();
</script>

<Header title="Clasificación LaLiga"></Header>

<section class="clasification">
	<div class="clasification__container">
		{#each equipos as equipo}
		<div class="clasification__box">
			<div class="clasification__header">
				<h4 class="clasification__h4">Equipo</h4>
				<p class="clasification__p--header">PG</p>
				<p class="clasification__p--header">PE</p>
				<p class="clasification__p--header">PP</p>
				<p class="clasification__p--header">Pts</p>
			</div>
			<div class="clasification__card">
				<div class="clasification__team">
					<p class="clasification__p--rank">{equipo.intRank}</p>
					<img class="clasification__badge" src={equipo.strBadge} alt={equipo.strTeam} />
					<p class="clasification__team">{equipo.strTeam}</p>
				</div>
				<p class="clasification__p">{equipo.intWin}</p>
				<p class="clasification__p">{equipo.intDraw}</p>
				<p class="clasification__p">{equipo.intLoss}</p>
				<p class="clasification__p">{equipo.intPoints}</p>
			</div>
		</div>
			
		{/each}
	</div>
</section>

<style>
	.clasification__container {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}

	.clasification__container > div:first-of-type{
		border: 2px solid var(--color-primary);
	}

	/* Encabezados */
	.clasification__header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		align-items: center;
		padding: 0.5rem;
		border-radius: 5px;
		font-weight: bold;
		text-align: center;
	}

	.clasification__h4 {
		width: 180px;
		text-align: left;
	}

	/* Fila de equipo */

	.clasification__box{
		background-color: var(--color-bg);
		border-radius: 20px;
		padding: .3rem;
	}

	.clasification__card {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		align-items: center;
		padding: 0.5rem;
		border-bottom: 1px solid var(--color-border);
		text-align: center;
	}

	.clasification__team {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 180px;
		text-align: left;
	}

	.clasification__badge {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}

	.clasification__team {
		font-weight: bold;
		text-align: left;
		padding-left: 0.5rem;
	}

	.clasification__p--header{
		color: var(--color-primary);
	}

	.clasification__p{
		font-size: 1rem;
		color: gray;
	}

	.clasification__p--rank {
		font-weight: bold;
		font-size: 1.5rem;
	}
</style>
