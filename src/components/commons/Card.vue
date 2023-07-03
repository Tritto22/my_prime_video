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
                    <i class="fa-solid fa-star" v-for="i in stars" :key="i"></i>
                </div>            
            </div>
            <div v-else-if="context == 'tv'" class="tv">
                <div class="description">
                    <h3 class="titol">{{ array.name }}</h3>
                    <h4 class="original-titol">{{ array.original_name }}</h4>
                    <img class="lang" v-if="flag.includes(array.original_language)" :src="require(`../../assets/img/${array.original_language}.png`)" :alt="array.original_language">
                    <img class="lang" v-else src="../../assets/img/world.png" :alt="array.original_language">
                    <h4 class="vote">{{ array.vote_average }}</h4>
                    <i class="fa-solid fa-star" v-for="i in stars" :key="i"></i>
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
            cardBackground: `url('https://image.tmdb.org/t/p/w500${this.array.poster_path}')`,
            stars: this.numberStars()
        }
    },
    methods: {
        numberStars(){
            return Math.ceil(this.array.vote_average/2);
        }
    }
}
</script>

<style lang="scss" scoped>

.card{
    position: relative;
    object-fit: contain;
    background-repeat: no-repeat;
    background-size: contain;
    height: 350px;
    width: 250px;
    .card-info{
    display: none;
    background-color: rgba(0,0,0,0.5);
    color: white;
    position: absolute;
    bottom: 10px;
    width: 100%;
    .fa-star{
        color: yellow;
    }
    }
    &:hover .card-info{
        display: block;
    }
}

.lang {
    width: 50px;
}
</style>