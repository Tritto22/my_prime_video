<template>
    <section class="cards" v-if="dataShared.dbMovies != null">
        <div class="card-movie"  v-for="(movie, i) in dataShared.dbMovies.results" :key="i">
            <h2 class="titol">{{ movie.title }}</h2>
            <h3 class="original-titol">{{ movie.original_title }}</h3>
            <h4 class="language">{{ movie.original_language }}</h4>
            <h4 class="vote">{{ movie.vote_average }}</h4>
        </div>
    </section>
</template>

<script>
import dataShared from '../../share/dataShered'
export default {
    name: 'MoviesCard',
    data(){
        return{
            dataShared
        }
    }
}
</script>

<style>

</style>