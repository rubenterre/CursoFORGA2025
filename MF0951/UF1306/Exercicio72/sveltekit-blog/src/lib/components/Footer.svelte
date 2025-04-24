<footer class="footer">
    <div class="footer__logo--feder">
        <img src="UE_feder-21-27_gl.svg" alt="Feder Logo" class="footer__img--logo">
    </div>
    <div class="footer__container">
        <div class="footer__credits">
            <img src="xunta.svg" alt="Logo Xunta de Galicia" class="footer__img--xunta">
            <div class="footer__legal">
                <p class="footer__p">© 2025 Turismo de Galicia | Todos os dereitos reservados</p>
                <div class="footer__links">
                    <a class="footer__a" href="#">Aviso Legal |</a>
                    <a class="footer__a" href="#">Contacto |</a>
                    <a class="footer__a" href="#">Accesibilidade</a>
                </div>
            </div>
        </div>
        <div class="footer__logo--galicia">
            <img src="turismo-logo.svg" alt="Logo de Turismo de Galicia" class="footer__img--turismo">
        </div>
    </div>
</footer>

<style>

    .footer__logo--feder{
        display: flex;
        justify-content: right;
        align-items: center;
        padding: 2rem;
    }

    .footer__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        background-color: var(--color-secondary);
        height: 121px;
    }

    .footer__credits{
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    .footer__legal{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer__p{
        font-size: 1rem;
        color: var(--color-light);
        font-weight: 400;
    }

    .footer__a{
        text-decoration: none;
        font-family: var(--color-primary);
        font-size: 1rem;
        color: var(--color-light);
        font-weight: 400;
    }

    .footer__img--xunta{
        height: 50px;
    }

    .footer__img--turismo{
        height: 50px;
    }

</style>
