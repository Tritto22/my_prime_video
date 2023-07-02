<template>
    <div class="container-hero">
        <div v-if="dataShared.dbTopRatedMovie != null">
            <div class="hero" 
            v-for="(hero, i) in dataShared.dbTopRatedMovie" :key="i" 
            :class="((i == position) ? 'active' : 'disable')"
            @mouseover="stopAutoplay()" @mouseleave="autoplay()"
            >
                <button class="left" @click="left()"><i class="fa-solid fa-circle-chevron-left"></i></button>
                <img :src="`https://image.tmdb.org/t/p/w1280${hero.backdrop_path}`" alt="">
                <div class="info">
                    <h2>{{ hero.original_title }}</h2>
                    <i class="fa-solid fa-star" v-for="i in roundedStarValue(hero.vote_average)" :key="i"></i>
                    <p>{{ hero.overview }}</p>

                </div>                
                <button class="right" @click="right()"><i class="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import dataShared from '../../share/dataShered';
import axios from 'axios';

export default {
    name: 'Hero',
    data() {
        return {
            dataShared,
            // /* slider */
            position: 0,
            autoplayID: null
            // /* /slider/ */
        }
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key: '25fbf29fed05ca67f0edfee0607829fd',
                language: 'it-IT',
            }
        })
            .then(response => {
                this.dataShared.dbTopRatedMovie = response.data.results

            })
            .catch(function (error) {
                console.log(error);
            }),
        this.autoplay()
    },
    methods: {
        log(){
            console.log(this.dataShared.dbTopRatedMovie);
        },
        roundedStarValue(voteAverage){
            return Math.ceil(voteAverage / 2)
        },

        /* slider */
        left() {
            if (this.position == 0) {
                this.position = this.dataShared.dbTopRatedMovie.length - 1;
            } else {
                this.position--;
            }
        },
        right() {
            if (this.position == this.dataShared.dbTopRatedMovie.length - 1) {
                this.position = 0;
            } else {
                this.position++;
            }
        },
    //     select(index) {
    //         this.position = index;
    //     },
        autoplay() {
            this.autoplayID = setInterval(this.right, 3000)
        },
        stopAutoplay: function () {
            clearInterval(this.autoplayID)
        }
    //     /* /slider/ */
    // },
    // mounted() {
    //     /* slider */
    //     
    //     /* /slider/ */
        
    // },
    }
}
</script>

<style lang="scss" scoped>
.hero{
    height: 500px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    position: relative;
    img{
        z-index: 0;
        object-fit: cover;
        height: 100%;
        width: 80%;
        border-radius: 15px;
    }
    .info{
        z-index: 1;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        width: 60%;
        overflow: auto;
        height: 20%;
        background-color: rgba(0,0,0,0.5);
        border-radius: 10px;
        padding: 10px;
        color: #fce9b4;
        .fa-star{
            color: yellow;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 2;
        font-size: 100px;
        border: none;
        border-radius: 20%;
        background-color: black;
        color: goldenrod;
        &.left{
            cursor: pointer;
            left: 10px;
        }
        &.right{
            cursor: pointer;
            right: 10px;
        }
    }
}
// .progress-bar {
//   width: 0;
//   height: 7px;
//   background-color: #e62429;
//   animation: progressAnimation 3s infinite;
// }
// @keyframes progressAnimation {
//   0% {
//     width: 0;
//   }
//   100% {
//     width: 100%;
//   }
// }
.active{
    display: flex;
}
.disable{
    display: none;
}
</style>