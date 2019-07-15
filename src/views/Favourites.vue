<template>
<div class="fav">
  <films-list :favourites="favourites" :films='favourites'/>
  <film-detail/>
</div>

</template>

<script>
import FilmsList from '@/components/FilmsList.vue';
import FilmDetail from '@/components/FilmDetail';

export default {
  components: {
    'films-list': FilmsList,
    'film-detail': FilmDetail
  },
  props: ["films","favourites"]
}
</script>

<style>
.fav {
  height: 500px;
}
</style>
