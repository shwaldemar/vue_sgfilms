<template>
<li v-on:click="handleClick">
   {{film.title}}
  <button class="btn" v-if="!favourites.includes(film)" v-on:click="addFavourite">FAVOURITE</button>
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
.btn {
  border:0px none;
  border-radius: 3%;
  padding: 4px 6px;
  color: purple;
  cursor:pointer;
  font-family: "Georgia", "Verdana", "Courier", Arial;
  /* font-weight: bold; */
  background-color: rgba(255, 255, 255, 0.01);
}
</style>
