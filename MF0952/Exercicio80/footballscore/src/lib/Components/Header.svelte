<script>

export let title;

</script>


<header class="header">
	<a href="/">
		<img src="/icons/icon_back.svg" alt="Volver atrás" />
	</a>
	<h2 class="header__h2">{title}</h2>
	<a href="/credits">
		<img src="/icons/icon_information.svg" alt="Botón de información" />
	</a>
</header>

<style>
    	/* Header */

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		padding: 3.6rem 1rem 1rem 1rem;
	}

</style>