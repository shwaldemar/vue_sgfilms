<template>
  <div class="main-container">
    <nav>
      <router-link :to="{ name: 'films' }"> FILMS  |</router-link>
      <router-link :to="{ name: 'favourites' }">  FAVOURITES </router-link>
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
background-size: cover;
background-position: center;
flex-direction: row;
font-family: Times;
}
</style>
