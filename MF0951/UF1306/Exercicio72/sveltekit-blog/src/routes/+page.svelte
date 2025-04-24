<script>
	import Header from "$lib/components/Header.svelte";

	export let data;
	const { posts } = data;
	console.log(posts);
</script>
<Header></Header>
<section class="blog">
	<div class="blog__container">
		<div class="blog__title">
			<h2 class="blog__h2">Destinos populares</h2>
			<p class="blog__p">Recibe toda a información necesaria para coñecer Galicia.</p>
		</div>
		<button class="blog__button"> Descubrir máis </button>
	</div>

    <div class="blog__articles">
        {#each posts as post}

        <div class="blog__article">
            <div class="blog__image">
                <img src={post.image} alt={post.title} />
            </div>
            <div class="blog__details">
                <h3 class="blog__h3">{post.title}</h3>
                <p class="blog__p">{post.summary}</p>
            </div>
            <div class="blog__buttons">
                <div class="blog__stars">
                    <img class="blog__star" src="icons/star.svg" alt="Estrela">
                    <img class="blog__star" src="icons/star.svg" alt="Estrela">
                    <img class="blog__star" src="icons/star.svg" alt="Estrela">
                    <img class="blog__star" src="icons/star.svg" alt="Estrela">
                    <img class="blog__star" src="icons/star.svg" alt="Estrela">
                </div>
                <a href="{post.path}" class="blog__button">
                    Ver máis
                </a>
            </div>
        </div>
	{/each}
    </div>

</section>

<style>
    .blog{
        max-width: 1318px;
        margin: 0 auto;
    }
    .blog__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    }

    .blog__h2{
        font-size: 2rem;
        font-weight: 600;
        color: var(--color-dark);
    }

    .blog__p{
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-secondary);
    }

    .blog__button{
        background-color: var(--color-dark);
        color: var(--color-light);
        font-size: 1rem;
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 30px;
        border: none;
        text-decoration: none;
    }

    .blog__articles{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .blog__article{
        background-color: var(--color-light);
        border-radius: 10px;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.10);
        transition: transform 0.3s;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       
    }

    .blog__article:hover{
        transform: scale(1.05);
    }

    .blog__image img{
        width: 100%;
    }

    .blog__details{
        padding:1rem 2rem;
    }

    .blog__h3{
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-dark);
        margin-bottom: .5rem;
    }

    .blog__p{
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--color-secondary);
    }

    .blog__buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

</style>