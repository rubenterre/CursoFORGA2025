<script>
	import Footer from '$lib/components/Footer.svelte';
</script>


<slot></slot>

<Footer></Footer>

<style>
    :global(*) {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    @font-face{
        font-family: Roboto;
        src: url('/styles/fonts/Roboto-VariableFont_wdth.ttf') format('truetype');
    }

    :root{
        --font-primary: Roboto;
        --color-primary: #057EB599;
        --color-secondary: #666666;
        --color-dark: #000000;
        --color-light: #FFFFFF;
    }
    
    :global(body) {
     background: white;
     color: var(--color-secondary);
     -webkit-font-smoothing: antialiased;
    }
    
    :global(body, input, button) {
     font-size: 14px;
     font-family: var(--font-primary);
    }
    
    :global(button) {
     cursor: pointer;
    }

    :global(p){
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--color-secondary);
        line-height: 2rem;
    }
</style>
