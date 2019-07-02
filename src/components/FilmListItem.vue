<template>
    <li v-on:click="handleClick"> {{film.title}}</li>
</template>

<script>
    import {eventBus} from '../main'

    export default {
        name: "film-list-item",
        props: ['film'],
        methods: {
            handleClick() {
                eventBus.$emit('film-selected', this.film)
            }
        }
    }
</script>

<style scoped>

</style>
