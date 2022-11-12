<template>
    <div id="checkboxGenre">
        <input v-model="genres" type="checkbox" id="action" value="28">
        <label for="action">Action</label><br>

        <input v-model="genres" type="checkbox" id="adventure" value="adventure">
        <label for="adventure">Adventure</label><br>

        <input v-model="genres" type="checkbox" id="animation" value="animation">
        <label for="animation">Animation</label><br>

        <input v-model="genres" type="checkbox" id="comedy" value="comedy">
        <label for="comedy">Comedy</label><br>

        <input v-model="genres" type="checkbox" id="crime" value="crime">
        <label for="crime">Crime</label><br>

        <input v-model="genres" type="checkbox" id="documentary" value="documentary">
        <label for="documentary">Documentary</label><br>

        <input v-model="genres" type="checkbox" id="drama" value="drama">
        <label for="drama">Drama</label><br>

        <input v-model="genres" type="checkbox" id="family" value="family">
        <label for="family">Family</label><br>

        <input v-model="genres" type="checkbox" id="fantasy" value="fantasy">
        <label for="fantasy">Fantasy</label><br>

        <input v-model="genres" type="checkbox" id="fiction" value="fiction">
        <label for="fiction">Fiction</label><br>

        <input v-model="genres" type="checkbox" id="history" value="history">
        <label for="history">History</label><br>

        <input v-model="genres" type="checkbox" id="horror" value="horror">
        <label for="horror">Horror</label><br>

        <input v-model="genres" type="checkbox" id="mistery" value="mistery">
        <label for="mistery">Mistery</label><br>

        <input v-model="genres" type="checkbox" id="music" value="music">
        <label for="music">Music</label><br>

        <input v-model="genres" type="checkbox" id="romance" value="romance">
        <label for="romance">Romance</label><br>

        <input v-model="genres" type="checkbox" id="science" value="science">
        <label for="science">Science</label><br>

        <input v-model="genres" type="checkbox" id="thriller" value="thriller">
        <label for="thriller">Thriller</label><br>

        <input v-model="genres" type="checkbox" id="tvMovie" value="tvMovie">
        <label for="tvMovie">TV Movie</label><br>

        <input v-model="genres" type="checkbox" id="war" value="war">
        <label for="war">War</label><br>

        <input v-model="genres" type="checkbox" id="western" value="western">
        <label for="western">Western</label><br>

    </div>
    <!-- <p>Test</p>
    <p v-for="genre in genres" v-bind:key="genre">{{ genre }}</p> -->
</template>

<script>
export default {
    name: "GenreComponent",
    data() {
        return {
            genres: []
        }
    },
    // props: ["genres"]
}
</script>