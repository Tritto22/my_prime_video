<template>
    <div class="card">
        <div v-if="context == 'movie'" class="movie">            
            <h3 class="titol">{{ array.title }}</h3>
            <h4 class="original-titol">{{ array.original_title }}</h4>
            <img class="lang" v-if="flag.includes(array.original_language)" :src="require(`../../assets/img/${array.original_language}.png`)" :alt="array.original_language">
            <img class="lang" v-else src="../../assets/img/world.png" :alt="array.original_language">
            <h4 class="vote">{{ array.vote_average }}</h4>
        </div>
        <div v-else-if="array == 'tv'" class="tv">
            <h3 class="titol">{{ array.name }}</h3>
            <h4 class="original-titol">{{ array.original_name }}</h4>
            <img class="lang" v-if="flag.includes(array.original_language)" :src="require(`../../assets/img/${array.original_language}.png`)" :alt="array.original_language">
            <img class="lang" v-else src="../../assets/img/world.png" :alt="array.original_language">
            <h4 class="vote">{{ array.vote_average }}</h4>
        </div>
    </div>
</template>

<script>
import dataShared from '../../share/dataShered';

export default {
    name: 'Card',
    props: {
        context: String,
        array: Object
    },
    data() {
        return {
            dataShared,
            flag: ['de', 'en', 'es', 'fr', 'it', 'nl', 'us']
        }
    },
    methods: {
        // log(){
        //     console.log(this.context);
        // }
    }
}
</script>

<style lang="scss" scoped>
.lang {
    width: 50px;
}
</style>