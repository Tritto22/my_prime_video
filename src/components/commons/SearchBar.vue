<template>
    <div class="search-bar">
        <form @submit.prevent="">
            <i class="bi bi-search" @click="search"></i>
            <input type="text" placeholder="Cerca" v-model="inputValue">
<!--             
            <button class="search" @click="search">cerca</button> -->
        </form>
    </div>
</template>

<script>
import dataShared from '../../share/dataShered';
import axios from 'axios';

export default {
    name: 'SearchBar',
    data(){
        return{
            dataShared,
            inputValue: ''
        }
    },
    methods: {
        search(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '25fbf29fed05ca67f0edfee0607829fd',
                    language: 'it-IT',
                    query: this.inputValue
                }
            })
                .then(response => {
                    this.dataShared.dbMovies = response.data.results
                })
                .catch(function (error) {
                    console.log(error);
                })
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: '25fbf29fed05ca67f0edfee0607829fd',
                    language: 'it-IT',
                    query: this.inputValue
                }
            })
                .then(response => {
                    this.dataShared.dbTv = response.data.results
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "bootstrap-icons/font/bootstrap-icons.css";
.search-bar{
    height: 100px !important;
    z-index: 2;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        background-color: #33373d;
        width: 100%;
        height: 100%;
        border: 3px solid white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 25px;
        input{
            background-color: #33373d;
            color: white;
            border: none;
            margin-left: 25px;
            font-size: 25px;
            width: 100%;
            &:focus{
                outline: none;
            }
        }
    }
}
</style>