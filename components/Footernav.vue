<template>
  <footer class="mt-96" id="Footer">

<!-- NE PAS TOUCHER -->
<div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
</div>

<!-- Liste des icônes pour les réseaux sociaux -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos réseaux à la place des "#" -->

    <!-- Si vous souhaitez retirer un réseau, supprimer entière une ligne ci-dessous -->

    <!-- Si vous souhaitez ajouter un réseau, rajouter une ligne comme celles ci-dessous, en remplaçant les balises "ion-icon" par des balises
                            trouvables sur ce site : https://ionic.io/ionicons (Vous cherchez une icône, cliquez sur une, puis coller le code) -->
<ul class="social_icon gap-4">

    <!-- Icône Facebook -->
    <li><a href="https://github.com/Marwin-Rdgs" target="_blank"> <img src="/icons/socials/github.png" alt="Icon of Github" class="text-white"> </a></li>
    <li><a href="https://www.linkedin.com/in/marwin-rodrigues/" target="_blank"> <img src="/icons/socials/linkedin.png" alt="Icon of Linkedin" class="text-white"> </a></li>
    <li><a href="https://www.instagram.com/marwin.rdgs/" target="_blank"> <img src="/icons/socials/instagram.png" alt="Iconf of Instagram" class="text-white"> </a></li>

</ul>


<!-- liste des pages, représentant alors un menu du Footer -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos pages à la place des "#" -->
<ul class="menu">
    <li><RouterLink to="/projects">Projets</RouterLink></li>
    <li><RouterLink to="/veille">Veille</RouterLink></li>
    <li><RouterLink to="/about">À propos</RouterLink></li>
    <li><RouterLink to="/contact">Contact</RouterLink></li>
    <li><RouterLink to="/chez-marwinweb">Chez Marwin-web</RouterLink></li>
</ul>

<!-- Vous trouverez ici la "mention légale" -->
<p>© Copyright 2025 Marwin RODRIGUES – Tous droits réservés – Création Chez Marwin web – Mentions légales – Politique de confidentialité</p>

</footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

footer {
    position: relative;
    width: 100%;
    background: #f0a500;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

footer .social_icon,
footer .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

footer .social_icon li,
footer .menu li {
    list-style: none;
}

footer .social_icon li a {
    font-size: 2em;
    color: #FFF;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

footer .social_icon li a:hover {
    transform: translateY(-10px);

}

footer .menu li a {
    font-size: 1.2em;
    color: #FFF;
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;
}

footer .menu li a:hover {
    opacity: 1;
}

footer p {
    color: #FFF;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.1em;   
}

footer .wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(/imgs/shapes/wavefooter.png);
    background-size: 1000px 100px;
}

footer .wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 1;
    animation: animateWave 4s linear infinite;
}

footer .wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animateWave_02 4s linear infinite;
}

footer .wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWave 3s linear infinite;
}

footer .wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animateWave_02 3s linear infinite;
}

@keyframes animateWave {
    0%
    {
        background-position-x: 1000px;
    }
    100%
    {
        background-position-x: 0px;
    }
}

@keyframes animateWave_02 {
    0%
    {
        background-position-x: 0px;
    }
    100%
    {
        background-position-x: 1000px;
    }
}

@keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  white-space: nowrap;
  overflow-x: hidden;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-flex;
  animation: 25s slide infinite linear;
}
</style>