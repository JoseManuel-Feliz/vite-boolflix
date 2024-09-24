<script>
import axios from 'axios'
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  data() {
    return {
      filteredMovies: [],
    }
  },
  methods: {
    searchByTitle(title) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=507f1c26039a4db2566d6870a51e07fe&query=${title}`,
        )
        .then((response) => {
          this.filteredMovies = response.data.results
          console.dir(this.filteredMovies)
        })
      return this.filteredMovies
    }

  },

  components: {
    AppHeader,
    AppMain,
  },
}
</script>

<template>
  <AppHeader @searchByTitle="searchByTitle" />
  <AppMain :filteredMovies="filteredMovies" />
  <h1>ciao</h1>
</template>

<style lang="scss">
@use "./css/partials/general.scss";
</style>