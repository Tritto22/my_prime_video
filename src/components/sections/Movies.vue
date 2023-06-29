<template>
    <section class="movies" v-if="dataShared.dbMovies != null">
        <h2>Film</h2>
        <ul>
            <li class="card-movie" v-for="(movie, i) in dataShared.dbMovies" :key="i">
                <!-- <h3 class="titol">{{ movie.title }}</h3>
                <h4 class="original-titol">{{ movie.original_title }}</h4>
                <img class="lang" v-if="flag.includes(movie.original_language)" :src="require(`../../assets/img/${movie.original_language}.png`)" :alt="movie.original_language">
                <img class="lang" v-else src="../../assets/img/world.png" :alt="movie.original_language">
                <h4 class="vote">{{ movie.vote_average }}</h4> -->
                <Card :context="'movie'" :array="movie"/>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShered';
import Card from '../commons/Card.vue';

export default {
    name: 'Movies',
    components: {
        Card
    },
    data() {
        return {
            dataShared,
            flag: ['de','en','es','fr','it','nl','us']
        }
    },
    methods: {
        // log(){
        //     console.log(flag);
        // }
    }
}
</script>

<style lang="scss" scoped>
</style>