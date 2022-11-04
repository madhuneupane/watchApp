<template>
    <div class="nav-link" @click.prevent="isOpen = !isOpen">
        <a href='#'>{{ title }}</a>
        <img class="icon" src="../assets/icons/dropdown.svg" />
        <div class="drop-down" v-if="isOpen">
            <div class="sub-menu">
                <router-link to="/OngoingChallenges">Ongoing Challenges</router-link>
            </div>
            <div class="sub-menu">
                <router-link to="/challenges-main/past-challenges">Past Challenges</router-link>
            </div>
            <div class="sub-menu">
                <router-link to="/CreateChallenges">Create Challenges</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownMenu",
    props: ['title'],
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>