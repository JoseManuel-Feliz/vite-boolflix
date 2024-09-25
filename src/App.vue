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

          store.filteredMovies = response.data.results;


        });
      console.dir(store.filteredMovies)

    },

    created() {

    },
  },
};
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