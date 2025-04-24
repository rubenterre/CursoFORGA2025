<script>
	export let data;
	const { post } = data;

/*     const paragraph =  $state('paragraph');
 */</script>

{#if post}

<section class="article">
    <div class="article__title">
        <h2 class="article__h2">
            {post.title}
        </h2>
        <div class="article__location">
            <img src="icons/location.svg" alt="Localización" class="article__location--icon">
            <p class="article__location--text">{post.title}</p>
        </div>
    </div>
    <hr>
    <div class="article__content">
        <div class="article__description">
            <img src="icons/doc.svg" alt="Icono de documento" class="article__description--icon">
            <p class="article__description--text">Descripción do destino</p>
        </div>
        <div class="article__text">
            <svelte:component this={post.Content} />
        </div>
    </div>
</section>
{:else}
	<p>Post no encontrado.</p>
{/if}

<style>
    .article{
        padding: 3rem 2rem;
    }

    .article__title{
        width: 100%;
    }

    .article__h2{
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--color-dark);
    }

    .article__location{
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 1rem 0px;
    }

    .article__location--icon{
        height: 20px;
    }

    .article__location--text{
        font-size: 1rem;
        color: var(--color-dark);
        font-weight: 300;
    }

    .article__content{
        margin-top: 2rem;
    }

    .article__description{
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 1rem 0px;
    }

    .article__description--text{
        font-size: 1.5rem;
        color: var(--color-dark);
        font-weight: 500;
    }
    .article__description--icon{
        height: 28px;
    }

    .article__text{
        margin-top: 2rem;
    }

/*     .paragraph{
        font-size: 1.5rem;
        color: var(--color-dark);
        font-weight: 300;
    } */

</style>