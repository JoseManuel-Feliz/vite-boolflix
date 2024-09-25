<script>
import { store } from '../js/store.js'

export default {
    name: 'AppMain',
    props: {},
    data() {
        return {
            store,
            noflag: 'xx',
        }
    },
    props: {

    },
    computed: {
        /*  noflag() {
             !this.getLangFlag.includes((store.filteredMovies.original_language))
             return this.noflag
         },
              */
    },
    methods: {
        getLangFlag(lang) {
            const flagsToSet = {
                en: 'gb', pt: 'br', zh: 'cn', ja: 'jp', ko: 'kr', hi: 'in', or: 'in', cs: 'cz'
            }
            const isoCode = flagsToSet[lang] || lang
            return isoCode
        }
    }

}

</script>

<template>
    <main>
        <ul>




            <li v-for="movie in store.filteredMovies" :key="movie.id">

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
                    <span :class="`fi fi-${(getLangFlag(movie.original_language))}`"></span>
                </p>
                <p>
                    Voto:
                    <span>{{ movie.vote_average }}</span>
                </p>
            </li>
        </ul>
    </main>
</template>

<style lang=scss scoped>
main {
    border: 3px dashed red;

    .fi {
        display: inline-block;
        height: 30px;
        width: 35px;
        background-size: contain;
        filter: drop-shadow(1px 1px #444343)
    }
}
</style>