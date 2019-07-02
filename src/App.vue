<template>
  <div id="app">
    <h1>Simon Hall's Vue App</h1>
    <h2>Studio Ghibli Films</h2>
    <ul>
      <li v-for="film in films">{{film.title}}</li>
    </ul>

  </div>
</template>

<script>
import FilmView from './components/FilmView.vue'

export default {
  name: 'app',
  data(){
  return {
    films: [],
    selectedFilm: null
  };
},
  mounted(){
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(films => this.films = films)
    },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
