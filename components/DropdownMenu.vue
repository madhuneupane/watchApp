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

<style>
.drop-down {
    position: absolute;
    background: linear-gradient(91.25deg, #02025F 0%, #7F11C3 51.47%, #E74B02 100%);
    border: 1px solid white;
    z-index: 2;
    transform: translateX(20px);
    border-radius: 5px;
}

.sub-menu {
    padding: .3rem;
    transition: all 0.2s ease-in-out;
}

.sub-menu:hover {
    background-color: #5F01A3;
}
</style>