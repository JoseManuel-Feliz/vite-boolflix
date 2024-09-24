<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppMain,
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <h1>ciao</h1>
</template>

<style lang="scss">
@use "./css/partials/general.scss"
</style>