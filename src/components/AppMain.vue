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
        <ul>




            <li v-for="movie in filteredMovies" :key="movie.id">

                <p>
                    Titolo:
                    <span>{{ movie.title }}</span>
                </p>
                <p>
                    Titolo Originale:
                    <span>{{ movie.original_title }}</span>
                </p>
                <p>
                    Lingua:
                    <span>{{ movie.original_language }}</span>
                </p>
                <p>
                    Voto:
                    <span>{{ movie.vote_average }}</span>
                </p>
            </li>
        </ul>
    </main>
</template>

<style scoped>
main {
    border: 3px dashed red;
}
</style>