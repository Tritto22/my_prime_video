<template>
    <section class="cards">
        <div class="card-movie"  v-for="(movie, i) in dataShared" :key="i">
            <h2 class="titol">{{ movie.dbMovies.title }}</h2>
            <h3 class="original-titol">{{ movie.dbMovies.original_title }}</h3>
            <h4 class="language">{{ movie.dbMovies.original_language }}</h4>
            <h4 class="vote">{{ movie.dbMovies.vote_average }}</h4>
        </div>
    </section>
</template>

<script>
import dataShared from '../../share/dataShered';

export default {
    name: 'Card',
    data() {
        return {
            dataShared
        }
    }
}
</script>

<style>

</style>