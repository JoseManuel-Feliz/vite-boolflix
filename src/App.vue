<script>
import axios from 'axios'
import { store } from './js/store.js'
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  data() {
    return {
      name: 'App',
      store,

    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    searchByTitle(title) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=507f1c26039a4db2566d6870a51e07fe&language=it&query=${title}`
        )
        .then((response) => {

          store.filteredMovies = response.data.results
          /* response.data.results.forEach(movie => {
            store.push(
              {
                title: movie.title,
                original_title: movie.original_title,
                lang: movie.original_language,
                vote_average: movie.vote_average,
              })
          }); 
          */
        });
      console.dir(store.filteredMovies)

    },
  },





}



</script>

<!-- @setLangFlag="setLangFlag" :flag="flag" -->

<template>
  <AppHeader @searchByTitle="searchByTitle" />
  <AppMain />
  <h1>ciao</h1>
</template>

<style lang="scss">
@use "./scss/partials/general.scss";
</style>