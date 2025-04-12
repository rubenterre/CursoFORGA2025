<script>
    export let data;
	const { cast } = data;
    console.log(cast)
</script>

	
<section class="main">
    <div class="main__titular">
      <h2 class="main__h2">
        Reparto principal
      </h2>
      <img class="main__flecha" src="/icons/flecha.svg" alt="Icono de flecha indicando que hay más contenido">
    </div>
  
      <div class="main__container">
        {#each cast as item }
        <div class="card">
            <img class="card__img" src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="{item.name}" loading="lazy">
            <h4 class="card__h4">{item.name}</h4>
            <p class="card__personaje"><em>{item.character}</em></p>
          </div>
        {/each}


      </div>
    </section>
  
  <style>
  
  
  .main__titular{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  
  .main__container{
    display: flex;
      gap: 1rem;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scroll-padding-left: var(--padding);
      padding: 0 var(--padding);
  }
  
  .card{
    width: 120px;
    margin: 1rem 0px;
    scroll-snap-align: start;
    flex: 0 0 auto;
  }
  
  .card__img{
  border-radius: 16px;
  width: 120px;
  }
  
  .card__h4{
    font-family: var(--font-primary);
    font-size: .8rem;
    font-weight: 700;
  }
  
  .card__p{
    font-family: var(--font-primary);
    font-size: .6rem;
  }

  .card__personaje{
    color: var(--color-grey);
  }
  
  
  
  </style>