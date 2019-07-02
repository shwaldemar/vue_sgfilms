<template>
  <div class="hello">
    <h1>Simon Hall's Vue App</h1>
    <h2>Studio Ghibli Films</h2>
    <div class="">
      <ul>
        <film-list-item v-for="(film, index) in filmList" :film="film"></film-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
import ListItem from './FilmListItem'

export default {
    name: "film-list",
    components: {FilmListItem},
    comments: {
        'film-list-item': FilmListItem
    },
    props: ['filmList']
}

<style>
</style>
