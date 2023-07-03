<template>
    <section class="searched-tv" v-if="dataShared.dbTv != null">
        <h2>Serie Tv</h2>
        <ul class="list">
            <li class="card-movie" v-for="(tv, i) in dataShared.dbTv" :key="i">
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
    }
}
</script>

<style lang="scss" scoped>
.list{
    display: flex;
    overflow-x: auto;
}
</style>