<script>
import { store } from '../js/store';

export default {
    name: 'StreamingMedia',
    props: {},
    data() {
        return {
            store,
            noflag: 'xx',

        }
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
            const flagsToSet =
            {
                en: 'gb',
                pt: 'br',
                zh: 'cn',
                ja: 'jp',
                ko: 'kr',
                hi: 'in',
                or: 'in',
                cs: 'cz'
            }
            const isoCode = flagsToSet[lang] || lang
            return isoCode
        },
        log() {
            return store.filteredMovies, store.filteredSeries

        }
    }
}

</script>

<template>
    <p>{{ log }}</p>
    <li v-for="movie in store.filteredMovies" :key="movie.id">

        <p>
            Titolo:
            <span>{{ movie.title }}</span>
        </p>,
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

    <li v-for="serie in store.filteredSeries" :key="serie.id">

        <p>
            Titolo:
            <span>{{ serie.title }}</span>
        </p>,
        <p>
            Titolo Originale:
            <span>{{ serie.original_title }}</span>
        </p>
        <p>
            Lingua:
            <span :class="`fi fi-${(getLangFlag(serie.original_language))}`"></span>
        </p>
        <p>
            Voto:
            <span>{{ serie.vote_average }}</span>
        </p>
    </li>

</template>

<style scoped lang="scss"></style>
