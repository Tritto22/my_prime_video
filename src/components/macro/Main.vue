<template>
    <main>
        <Hero/>
        <Movies/>
        <Tv/>
    </main>
</template>

<script>
import Hero from '../sections/Hero.vue';
import Movies from '../sections/Movies.vue';
import Tv from '../sections/Tv.vue';
import dataShared from '../../share/dataShered';

export default {
    name:'Main',
    components: {
        Movies,
        Tv,
        Hero
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