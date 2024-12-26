<script>
export default {
  data() {
    return {
      categ: 0, // Définir 'categ' dans l'objet réactif de Vue.js
    };
  },
  methods: {
    setCategory(value) {
      this.categ = value; // Met à jour la catégorie et déclenche la réactivité
      console.log("Catégorie sélectionnée :", this.categ);
    },
  },
};
</script>

<template>
    <h1 class="col-span-2 font-Primary text-3xl uppercase pl-[4%]">Compétences</h1>
    <div class="desktop:grid desktop:grid-cols-2 overflow-x-hidden">
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 1">
            <h2>Front-end</h2>
        </div>
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 2">
            <h2>Back-end</h2>
        </div>
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 3">
            <h2>Jeux Vidéos</h2>
        </div>
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 4">
            <h2>Outils</h2>
        </div>
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 5">
            <h2>Pratiques</h2>
        </div>
        <div class="col-span-1 animate__animated animate__fadeInLeft" v-if="categ === 6">
            <h2>Qualités</h2>
        </div>
    <div id="page" class="site ml-[100%] col-span-1 col-start-2">
        <div class="container">
            <nav>
                <input type="checkbox" id="link" hidden>
                <label for="link" class="link">
                     <img src="/icons/menu.svg" alt="Icône de Menu pour la section compétences" class="w-[32px] menu">
                     <img src="/icons/close.svg" alt="Icône de Menu pour la section compétences" class="w-[32px] close">
                </label>
                <ul class="submenu">
                    <li  @click="setCategory(1)"><button><span>Front-end</span><img src="/icons/front-end.svg" alt="Icône de Menu pour la section compétences"></button></li>
                    <li @click="setCategory(2)"><button><span>Back-end</span><img src="/icons/back-end.svg" alt="Icône de Menu pour la section compétences"></button></li>
                    <li @click="setCategory(3)"><button><span>Jeux Vidéos</span><img src="/icons/VR.svg" alt="Icône de Menu pour la section compétences"></button></li>
                    <li @click="setCategory(4)"><button><span>Outils</span><img src="/icons/tools.svg" alt="Icône de Menu pour la section compétences"></button></li>
                    <li @click="setCategory(5)"><button><span>Pratiques</span><img src="/icons/skills.svg" alt="Icône de Menu pour la section compétences"></button></li>
                    <li @click="setCategory(6)"><button><span>Qualités</span><img src="/icons/qualites.svg" alt="Icône de Menu pour la section compétences"></button></li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
}
button {
    text-decoration: none;
    vertical-align: middle;
    color: inherit;
}

* {
    line-height: 1.8;
    font-weight: 400;
    color: #EEA500;
}

.site {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92vh;
}

.container {
    max-width: 480px;
    width: 100%;
    padding: 0 2em;
}

nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 480px;
    width: 100%;
    height: 500px;
}

nav .link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    right: 0;
    cursor: pointer;
    z-index: 99;
}

nav .link::before{
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-image: linear-gradient(to left, transparent 25%, #EEA500);
    border-radius: 50% 0 0 50%;
    transform: scale(2);
    z-index: -2;
}

nav .link::after {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: #2C3236;
    border-radius: 50% 0 0 50%;
    transform: scale(2);
    z-index: -1;
    opacity: .5;
    transition: opacity .3s;
}

nav .link:hover::after {
    opacity: .9;
}


nav .link .close,
nav input:checked ~ label .menu {
    display: none;
}

nav input:checked ~ label .close {
    display: block;
}



nav ul.submenu {
position: absolute;
top: 0;
right: 4em;
width: 350px;
height: 500px;
transform: rotate(90deg);
visibility: hidden;
transition: visibility .1s;
}

nav > input:checked ~ ul {
    visibility: inherit;
}


nav > input:checked ~ ul li {
    transform: rotate(calc((-180deg / 7)*var(--item))) translateX(0);
    opacity: 1;
}



/* 6 items + 1 */
nav ul.submenu li {
    --item: 1;
    position: absolute;
    width: 200px;
    height: 60px;
    transform: rotate(calc((-180deg / 7)*var(--item))) translateX(157px);
    transform-origin: right center;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: transform .7s, opacity .2s;
}

nav ul li:nth-child(2) {
    --item: 2;
}

nav ul li:nth-child(3) {
    --item: 3;
}

nav ul li:nth-child(4) {
    --item: 4;
}

nav ul li:nth-child(5) {
    --item: 5;
}

nav ul li:nth-child(6) {
    --item: 6;
}

nav ul li button {
    position: relative;
    display: flex;
    align-items: center;
}

nav ul li button img {
    font-size: 20px;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 3px;
    background-color: #EEA500;
    border: 2px solid transparent;
    transition: border .3s background-color .3s;
}

nav ul li button:hover img {
    background-color: transparent;
    border-color: #EEA500;
}

nav ul li button span {
    position: absolute;
    right: calc(100% + 1em);
    text-align: right;
    font-size: 13px;
    width: 100px;
    padding: 0 10px;
    border-radius: 25px;
    background-image: linear-gradient(to right, transparent 25%, #EEA500);
    z-index: -1;
    transform: translateX(50px);
    opacity: 0;

    transition: color .3s, transform .3s .4s, opacity .2 .4s;
}

nav > input:checked ~ ul li button span {
    transform: translateX(0);
    opacity: 1;
}

nav ul li button span::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 25px;
    background-color: #2C3236;
    z-index: -1;
    transition: background-color .3s;
}

nav ul li button:hover span::before {
    background-color: transparent;
}

nav ul li button:hover span {
    color: #FAFAFA;
}

nav ul li:nth-child(1) button img {
    transform: rotate(292deg);
}
nav ul li:nth-child(2) button img {
    transform: rotate(322deg);
}
nav ul li:nth-child(3) button img {
    transform: rotate(347deg);
}
nav ul li:nth-child(4) button img {
    transform: rotate(10deg);
}
nav ul li:nth-child(6) button img {
    transform: rotate(60deg);
}

</style>