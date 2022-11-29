<template>
    <div class="nav-link" id="drop" @click.prevent="isOpen = !isOpen">
        <a href='#'>{{ title }}</a>
        <img class="icon" src="../assets/icons/dropdown.svg" />
        <div class="drop-down" v-if="isOpen">
            <div class="sub-menu">
                <router-link to="/challenge-main">Challenges</router-link>
            </div>
            <div class="sub-menu">
                <router-link to="/ongoing-challenges">Ongoing Challenges</router-link>
            </div>
            <div class="sub-menu">
                <router-link to="/past-challenge">Past Challenges</router-link>
            </div>
            <div class="sub-menu">
                <router-link to="/create-challenge">Create Challenges</router-link>
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