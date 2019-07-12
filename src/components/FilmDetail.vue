<template>
  <div v-if='selectedFilm'>
    <h3>{{ selectedFilm.title }}</h3>
    <p>Director: {{selectedFilm.director}}</p>
    <p>Producer: {{selectedFilm.producer}}</p>
    <p>Release Date: {{selectedFilm.release_date}}</p>
    <br>
    <p>Description: {{selectedFilm.description}}</p>

  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'film-detail',
  data() {
    return {
      selectedFilm: null
    }
  },
  mounted() {
    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film
    })
  }
}
</script>

<style>
</style>
