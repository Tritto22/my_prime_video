<template>
    <div class="search-bar">
        <form @submit.prevent="">
            <input type="text" placeholder="inserisci il titolo" v-model="inputValue">
            <button class="search" @click="search">cerca</button>
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

</style>