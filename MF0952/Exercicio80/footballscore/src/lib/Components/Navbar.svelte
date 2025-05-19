<nav class="navbar">
    <a href="/dashboard">
        <img src="/icons/Bookmark.svg" alt="Icono de dashboard">
    </a>
    <a href="/">
        <img src="/icons/Home.svg" alt="Icono de Inicio">
    </a>
    <a href="/league">
        <img src="/icons/Document.svg" alt="Icono de clasificación">
    </a>
</nav>

<style>
    .navbar{
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 56px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: var(--color-bg);

        & img{
            width: 24px;
        }
    }

    a{
        text-decoration: none;
    }

</style>