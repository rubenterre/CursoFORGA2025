<script>
  const logoApp = "/logo_footballscore-element.svg";
  const logoRT = "/Ruben_Terre_Logo_blanco_131119.svg";
  const socialIcons = [
    {
      name: "Behance",
      url: "https://www.behance.net/rubenterre",
      icon: "/socials/behance-square-brands_white.svg",
      alt: "Behance link"
    },
    {
      name: "GitHub",
      url: "https://github.com/rubenterre",
      icon: "/socials/github-square-brands_white.svg",
      alt: "GitHub link"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rubenterrelameiro",
      icon: "/socials/linkedin-brands_white.svg",
      alt: "LinkedIn link"
    }
  ];
</script>

<svelte:head>
  <title>Créditos - FootballScore</title>
  <meta name="description" content="Créditos de la aplicación FootballScore desarrollada por Rubén Terré Lameiro." />
</svelte:head>

<section class="credits">
  <div class="creditos-container">
    <div class="logo">
      <img src={logoApp} alt="Logo FootballScore" />
    </div>
    <h1 class="about-tit">FootballScore</h1>
    <p class="about-version">Versión 1.0</p>
    <p class="about-txt">Esta aplicación está sustentada por la API de TheSportsDB.</p>

    <div class="botoneslegal">
      <a href="/privacidad" class="botoneslegal--btn">
        POLÍTICA DE PRIVACIDAD
      </a>
    </div>

    <p class="about-txt">
      Desarrollado por Rubén Terré Lameiro.
    </p>
    <div class="logort">
      <img src={logoRT} alt="Logo Rubén Terré" />
    </div>
    <p class="about-txt">
      Para más información sobre mis trabajos visita mi web en 
      <a href="https://www.rubenterre.com" target="_blank" rel="noopener noreferrer">www.rubenterre.com</a>
      o a través de los siguientes canales:
    </p>

    <div class="iconcontact">
      {#each socialIcons as social}
        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
          <img src={social.icon} alt={social.alt} />
        </a>
      {/each}
    </div>

    <h2 class="about-tit">MIT License</h2>
    <p class="about-version">Copyright (c) 2020 Rubén Terré - Diseño & Desarrollo web</p>
    <p class="licencia-txt">
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    </p>
    <p class="licencia-txt">
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    </p>
    <p class="licencia-txt">
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
  </div>
</section>

<style>
  .credits {
    background-color: #0d1b2a;
    margin: 0;
    padding: 50px 2rem 3rem 2rem;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }

  .creditos-container {
    max-width: 650px;
    margin: 0 auto;
    padding: 2rem 1rem 3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(13,27,42,0.95);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.15);
  }

  .logo img {
    display: block;
    margin: 0 auto 1.5rem auto;
    width: 40%;
    min-width: 120px;
    max-width: 220px;
  }

  .about-tit {
    color: white;
    font-family: SFProText-Medium, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0 0.5rem 0;
  }

  .about-version {
    color: white;
    font-family: SFProText-Regular, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
  }

  .about-txt {
    color: white;
    font-family: SFProText-Regular, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
    padding-top: 1rem;
    margin: 0;
  }

  .logort {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 40%;
    min-width: 120px;
    max-width: 220px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .logort img {
    width: 100%;
    display: block;
  }

  a{
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-weight: 600;
    text-decoration: none;
  }

  .botoneslegal {
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .botoneslegal--btn {
    background-color: #1b263b;
    border-radius: 12px;
    border: 1px solid #415a77;
    padding: 0.7rem 2rem;
    color: #e0e1dd;
    font-family: SFProText-Medium, sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    text-decoration: none;
    transition: background 0.2s;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }

  .botoneslegal--btn:hover,
  .botoneslegal--btn:focus {
    background-color: #415a77;
    color: #fff;
  }

  .iconcontact {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }

  .iconcontact img {
    width: 48px;
    min-width: 36px;
    max-width: 60px;
    transition: transform 0.2s;
    border-radius: 8px;
  }

  .iconcontact img:hover {
    transform: scale(1.12);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  .licencia-txt {
    color: white;
    font-family: SFProText-Regular, sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    text-align: justify;
    padding-top: 1rem;
    margin: 0;
  }

  @media (max-width: 600px) {
    .creditos-container {
      padding: 1rem 0.2rem 2rem 0.2rem;
    }
    .logo img, .logort {
      width: 70% !important;
      min-width: 80px;
      max-width: 180px;
    }
    .iconcontact img {
      width: 36px;
      min-width: 28px;
      max-width: 44px;
    }
  }
</style>
