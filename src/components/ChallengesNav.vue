<template>
    <div class="nav-link" @click="isOpen = !isOpen">
        <!-- Include SVG of the arrow to open the dropdown -->
        <div class="drop-down" v-if="isOpen">
            <div class="nav-link">
                <router-link to="/challenges/ongoing-challenges">Ongoing Challenges</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/challenges/create-challenges">Create Challenges</router-link>
            </div>
            <!-- <div class="nav-link">
                <router-link to="/current-challenges">Current Challenges</router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "challenges-nav",
    props: ['title'],
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>