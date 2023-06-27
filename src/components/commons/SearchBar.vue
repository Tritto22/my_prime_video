<template>
    <div class="search-bar">
        <input type="text" placeholder="inserisci il titolo" v-model="inputValue">
        <button class="search" @click="search">cerca</button>
    </div>
</template>

<script>
import axios from 'axios';
import dataShered from '../../share/dataShered';
export default {
    name: 'SearchBar',
    data(){
        return{
            inputValue: '',
            dataShered
        }
    },
    methods: {
        search() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '25fbf29fed05ca67f0edfee0607829fd',
                    query: this.inputValue,
                    language: 'it-IT'

                }
            })
                .then((response) => {
                    this.dataShered.dbMovies = response.data;
                    console.log(this.dataShered.dbMovies);
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