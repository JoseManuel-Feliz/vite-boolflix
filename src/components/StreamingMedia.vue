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
        log() {
            return store.filteredMovies, store.filteredSeries
        },
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
        toInteger(n) {
            return Math.round(n / 2);
        }

    }
}


</script>

<template>
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
            <fa-icon v-for="star in toInteger(movie.vote_average)" icon="star" class="star text-warning" />
        </p>

        <img :src="`https://www.themoviedb.org/t/p/w300${movie.poster_path}`" :alt="`${movie.title} poster`" />

    </li>

    <li v-for="serie in store.filteredSeries" :key="serie.id">

        <p>
            Titolo:
            <span>{{ serie.title }}</span>
        </p>
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
            <fa-icon v-for="star in toInteger(serie.vote_average)" icon="star" class="star text-warning" />
        </p>

        <img :src="`https://www.themoviedb.org/t/p/w300${serie.poster_path}`" :alt="`${serie.title} poster`" />

    </li>

</template>

<style scoped lang="scss"></style>
