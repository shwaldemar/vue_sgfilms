<template>
  <div class="main-container">
    <nav>
      <router-link class="nav" :to="{ name: 'films' }"> FILMS  |</router-link>
      <router-link class="nav" :to="{ name: 'favourites' }">  FAVOURITES </router-link>
    </nav>
    <h1>Simon's Vue App</h1>
    <h2>Studio Ghibli Films</h2>

  <router-view :films="films" :favourites="favouriteFilms"/>
  </div>
</template>

<script>
import filmservices from '@/services/filmservices'
import FilmsList from './components/FilmsList.vue';
import FilmDetail from './components/FilmDetail.vue';
import { eventBus } from './main.js';


export default {
  name: 'app',
  data(){
  return {
    films: [],
    selectedFilm: null,
    favouriteFilms: []

  };
},
  mounted(){
   filmservices.getfilms()
   .then(films => this.films = films)
   eventBus.$on('film-favourited', (film) => {
     this.favouriteFilms.push(film)
   })
    },
    components: {
      'films-list': FilmsList,
      'film-detail': FilmDetail
    }
}

</script>

<style>
.main-container {
background-image: url("../sgclipbubbles.gif");
/* background-size: cover; */
/* background-position: center; */

background-attachment: fixed;
background-size: cover;
background-repeat: no-repeat;


flex-direction: row;
font-family: Times;
color: silver;
padding: 25px;
font-family: "Georgia", "Verdana", "Courier", Arial;

height: 600px;
}

h1,h2,h4 {
  color: white;
  font-family: "Georgia", "Verdana", "Courier", Arial;
  text-align: center;
}

.nav {
  color: silver;
  font-family: "Georgia", "Verdana", "Courier", Arial;
}

</style>
