<template>
    <div v-if="film">
    <h3> Title: {{film.title}} </h3>
    <p> Released Date: {{film.released_date}} </p>
    <p> Director: {{film.director}} </p>
    </div>
</template>

<script>
    export default {
        name: "Film-details",
        props: ['film']
    }
</script>

<style scoped>

</style
