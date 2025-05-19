<script>
	import Navbar from "$lib/Components/Navbar.svelte";

</script>
<slot></slot>
<Navbar></Navbar>

<style>

:global(*) {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

@font-face{
    font-family: 'Poppins-Regular';
    src: url('/fonts/Poppins-Regular.ttf')
}

@font-face{
    font-family: 'Poppins-Bold';
    src: url('/fonts/Poppins-SemiBold.ttf')
}

@font-face{
    font-family: 'Sora';
    src: url('/fonts/Sora-SemiBold.ttf')
}

:global(:root){
    --color-primary: #FFFFFF;
    --color-secondary: #222232;
    --color-gradient: linear-gradient(90deg, #4568DC 0%, #B06AB3 100%);
    --color-bg: #414158;
    --color-accent: #4568DC;
    --color-accent2:#B06AB3;
    --font-primary: 'Poppins-Regular';
    --font-secondary: 'Poppins-SemiBold';
    --font-tertiary: 'Sora';
    --font-size-base: 14px;

}

:global(body) {
 background: var(--color-secondary);
 color: var(--color-primary);
 -webkit-font-smoothing: antialiased;
}

:global(body, input, button) {
 font-size: var(--font-size-base);
 font-family: var(--font-primary);
}

:global(button) {
 cursor: pointer;
}

</style>