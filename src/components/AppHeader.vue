<script>

import { store } from '../js/store.js'

export default {
    name: 'HeaderApp',
    props: {},
    data() {
        return {
            store,
            textToSearch: ''
        }
    }
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <div>
            <input v-model="textToSearch" type="text" placeholder="what you want to watch?"
                @keyup.enter="$emit('searchByTitle', textToSearch)">
            <button @click=" $emit('searchByTitle', textToSearch)">search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    border: dashed 3px red;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
</style>