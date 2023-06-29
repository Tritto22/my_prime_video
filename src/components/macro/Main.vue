<template>
    <main>
        <Movies/>
        <Tv/>
    </main>
</template>

<script>
import Movies from '../sections/Movies.vue';
import Tv from '../sections/Tv.vue';
import dataShared from '../../share/dataShered';

export default {
    name:'Main',
    components: {
        Movies,
        Tv
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