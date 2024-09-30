<script>
import { store } from '../js/store';
import StreamingMedia from './StreamingMedia.vue';


export default {
    name: 'AppMain',
    props: {},
    components: {
        StreamingMedia,
    },
    data() {
        return {
            store,

        }
    },
    props: {
    },
    computed: {

    },
    methods: {

    }

}

</script>

<template>
    <main>
        <ul>
            <StreamingMedia />
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