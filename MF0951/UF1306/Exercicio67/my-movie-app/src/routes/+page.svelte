<script>
	import Header from "$lib/components/Header.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import Novedades from "$lib/components/Novedades.svelte";
	import Tendencias from "$lib/components/Tendencias.svelte";

</script>
<Header></Header>

<div class="container">
<div class="explorar">
    <a href="/buscar">
    <img class="explorar__img" src="./img/explora_banner.svg" alt="Explorar películas de la filmoteca">
    </a>
    <a class="explorar__btn" href="/buscar">Buscar</a>
</div>

</div>
<Novedades></Novedades>
<Tendencias></Tendencias>
<Nav></Nav>

<style>
    .container{
        padding: 0px 2rem;
/*         height: 70vh; */
        background:linear-gradient(180deg, rgba(20,20,24,0.00) 0%, rgba(20,20,24,0.50) 22%, #141418 75%), url(./img/matrix_fondo.png);   
        background-size: cover;
        background-position: center;
    }

    .explorar{
        padding: 1.5rem 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .explorar__btn{
        background: var(--color-blue);
        color: var(--color-primary);
        width: 100px;
        height: 40px;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: var(--font-secondary);
    }
</style>