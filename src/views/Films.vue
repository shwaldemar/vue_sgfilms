<template>
  <div class="">
    <films-list :films='films' :favourites="favourites"/>
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
  props: ["films", "favourites"],

}
</script>

<style>

</style>
