import vue from 'vue';
// import axios from 'axios';

export default vue.observable({
    dbMovies: null,
    dbTv: null,
    searchValue: '',
    // created() {
    //     axios.get('https://api.punkapi.com/v2/beers',{
    //         api_key: '25fbf29fed05ca67f0edfee0607829fd',
    //         language: 'it-IT',
    //         query: searchValue
    //     })
    //         .then(response => {
    //             this.dbMovies = response.data.results
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
})