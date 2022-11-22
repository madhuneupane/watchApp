<template>
    <h1>Login Auth</h1>
    <LoginAuth />

    <button @click.prevent="togglePopup">QUIT CHALLENGE</button>
    <!-- QUIT CHALLENGE POPUP -->
    <SimplePopup @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
            <h1 class="popUpHeading">Quit?</h1>
            <h3 class="popUpText">If you quite the challenge,<br>you will lose all data.<br>Do you wish to continue?
            </h3>
            <button class="primaryBtn" @click.prevent="deleteFromFirebase">Quit Challenge</button>
        </div>
    </SimplePopup>
    <br>
    <button @click.prevent="togglePopup">SAVE REVIEW</button>
    <!-- QUIT CHALLENGE POPUP -->
    <SimplePopup @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
            <h1 class="popUpHeading">Your review has been saved!</h1>
            <button @click.prevent="togglePopup" class="primaryBtn">Done</button>
        </div>
    </SimplePopup>
</template>

<script>
import LoginAuth from "../components/LoginAuth.vue";
import SimplePopup from '../components/SimplePopup.vue';
import { ref } from 'vue';

export default {
    name: "TestPage",
    components: {
        LoginAuth,
        SimplePopup,
    },
    methods: {
        redirect() {
            this.$router.push("/");
        },
        deleteFromFirebase() {
            console.log("deleted");
        }
    },
    setup() {
        const popupActive = ref(false);
        const togglePopup = () => {
            popupActive.value = !popupActive.value;
        }
        return { popupActive, togglePopup };
    },
}
</script>