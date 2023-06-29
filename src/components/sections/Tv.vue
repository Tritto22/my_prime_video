<template>
    <section class="serie-tv" v-if="dataShared.dbTv != null">
        <h2>Serie Tv</h2>
        <ul>
            <li class="card-movie" v-for="(tv, i) in dataShared.dbTv" :key="i">
                <!-- <h3 class="titol">{{ tv.name }}</h3>
                <h4 class="original-titol">{{ tv.original_name }}</h4>
                <img class="lang" v-if="flag.includes(tv.original_language)" :src="require(`../../assets/img/${tv.original_language}.png`)">
                <img class="lang" v-else src="../../assets/img/world.png" :alt="movie.original_language">
                <h4 class="vote">{{ tv.vote_average }}</h4> -->
                <Card :context="'tv'" :array="tv"/>
            </li>
        </ul>
    </section>
</template>

<script>
import dataShared from '../../share/dataShered';
import Card from '../commons/Card.vue';

export default {
    name: 'Tv',
    components: {
        Card
    },
    data() {
        return {
            dataShared,
            flag: ['de', 'en', 'es', 'fr', 'it', 'nl', 'us']
        }
    },
    // methods: {
    //     imgPath(lang) {
    //         require(`../../assets/img/${lang}.png`)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.serie-tv{
    background-color: aqua;
}
.lang{
    width: 50px;
}
</style>