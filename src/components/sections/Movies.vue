<template>
    <section class="searched-movies" v-if="dataShared.dbMovies != null">
        <h2>Film</h2>
        <ul class="list">
            <li class="card-movie" v-for="(movie, i) in dataShared.dbMovies" :key="i">
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
    }
}
</script>

<style lang="scss" scoped>
.list{
    display: flex;
    overflow-x: auto;
}
</style>