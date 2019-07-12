<template>
<li v-on:click="handleClick">
   {{film.title}}
  <button v-if="!favourites.includes(film)" v-on:click="addFavourite">FAVOURITE</button>
</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'list-item',
  props: ['film', 'favourites'],
  methods: {
    handleClick(){
      eventBus.$emit('film-selected', this.film);
    },
    addFavourite(){
      eventBus.$emit('film-favourited', this.film);
    }
  }
}
</script>

<style>
</style>
