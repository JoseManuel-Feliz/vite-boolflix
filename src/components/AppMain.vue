<script>
export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
    props: {
        filteredMovies: Array
    },
}
</script>

<template>
    <main>
        <div v-for="movie in filteredMovies" :key="movie.id">
        </div>
    </main>
</template>

<style scoped>
main {
    border: 3px dashed red;
}
</style>