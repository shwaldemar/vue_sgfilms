<template>
  <div>
      <list-item v-for="(film, index) in films" :film="film" :key="index" :favourites="favourites"></list-item>
  </div>
</template>

<script>
import ListItem from './FilmListItem.vue'

export default {
  name: 'films-list',
  props: ['films', 'favourites'],
  components: {
    "list-item": ListItem,
  }
}
</script>

<style lang="css" scoped>
</style>
