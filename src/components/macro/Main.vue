<template>
    <main>
        <MoviesCard/>
    </main>
</template>

<script>
import MoviesCard from '../sections/MoviesCard.vue';
import dataShared from '../../share/dataShered';

export default {
    name:'Main',
    components: {
        MoviesCard
    },
        data() {
        return {
            dataShared
        }
    }

}
</script>

<style>

</style>