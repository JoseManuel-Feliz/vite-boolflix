<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <h1>Boolflix</h1>
        <div>
            <input type="text" placeholder="what you want to watch?">
            <button>search</button>
        </div>
    </header>
</template>

<style scoped>
header {
    height: 80px;
    border: dashed 3px red;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
</style>