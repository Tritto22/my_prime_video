<template>
    <div class="card" :style="{ 'background-image': cardBackground }">
        <div class="card-info">
            <div v-if="context == 'movie'" class="movie">
                <div class="description">
                    <h3 class="titol">{{ array.title }}</h3>
                    <h4 class="original-titol">{{ array.original_title }}</h4>
                    <img class="lang" v-if="flag.includes(array.original_language)" :src="require(`../../assets/img/${array.original_language}.png`)" :alt="array.original_language">
                    <img class="lang" v-else src="../../assets/img/world.png" :alt="array.original_language">
                    <h4 class="vote">{{ array.vote_average }}</h4>
                </div>            
            </div>
            <div v-else-if="array == 'tv'" class="tv">
                <div class="description">
                    <h3 class="titol">{{ array.name }}</h3>
                    <h4 class="original-titol">{{ array.original_name }}</h4>
                    <img class="lang" v-if="flag.includes(array.original_language)" :src="require(`../../assets/img/${array.original_language}.png`)" :alt="array.original_language">
                    <img class="lang" v-else src="../../assets/img/world.png" :alt="array.original_language">
                    <h4 class="vote">{{ array.vote_average }}</h4>
                </div>
            </div>
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
            flag: ['de', 'en', 'es', 'fr', 'it', 'nl', 'us'],
            cardBackground: `url('https://image.tmdb.org/t/p/w500${this.array.poster_path}')`
        }
    },
    methods: {
        log(){
            console.log(this.pathBg);
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    object-fit: contain;
    background-repeat: no-repeat;
    background-size: contain;
    height: 500px;
    .card-info{
    display: none;
    }
    &:hover .card-info{
        display: block;
    }
}

.lang {
    width: 50px;
}
</style>