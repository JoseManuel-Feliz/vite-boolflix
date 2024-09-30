<script>
import axios from 'axios';
import { store } from './js/store';

import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  data() {
    return {
      store,
      name: 'App',

      apiKey: '507f1c26039a4db2566d6870a51e07fe',
      apiURL: 'https://api.themoviedb.org/3/search/',

    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    async searchMoviesByTitle(title) {
      const params = {
        api_key: this.apiKey,
        query: title,
        language: 'it',
      }
      const movieURL = `${this.apiURL}movie`
      const requestMovie = axios.get(`${movieURL}`, { params })
      await requestMovie.then((response) => {

        store.filteredMovies = response.data.results
      })
    },
    async searchSeriesByTitle(title) {
      const params = {
        api_key: this.apiKey,
        query: title,
        language: 'it',
      }
      const seriesURL = `${this.apiURL}tv`
      const requestSeries = axios.get(`${seriesURL}`, { params })
      await requestSeries.then((response) => {

        store.filteredSeries = response.data.results
      })
    },

    async searchByTitle(title) {


      await this.searchMoviesByTitle(title)
      await this.searchSeriesByTitle(title)


    },
    created() {
    },
  }
}
</script>


<template>
  <AppHeader @searchByTitle="searchByTitle" />
  <AppMain />
  <h1>ciao</h1>
</template>

<style lang="scss">
@use "./scss/partials/general.scss";
</style>