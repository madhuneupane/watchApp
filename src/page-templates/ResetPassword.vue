<template>
    <NavigationBar />
    <section id="resetPasswordPage">
        <h1>Reset your password</h1>
        <h2>Please fill in the required fieds below</h2>
        <form class="resetForm">
            <div id="newPassword">
                <label class="labelClass" for="email">Email address<span class="req">*</span></label>
                <input v-model="email" type="email" name="email" id="email" placeholder="email@gmail.com">
                <p class="error">{{ errorMessage }}</p>
            </div>
            <div>
                <button type="submit" class="primaryBtn nextBtn" @click.prevent="passwordRetrieve">Next</button>
            </div>
        </form>
        <router-link class="seeMoreBtn link backToLogin" to="/login-page">Back to login page</router-link>
    </section>
    <SimplePopup @close="togglePopup" :popupActive="popupActive">
        <div class="popupContent">
            <div class="reviewSaved">
                <h1>Reset password sent!</h1>
                <p>Please check your email inbox for additional instructions</p>
                <button @click="redirect" type="button" class="secondaryBtn">Go to Home</button>
            </div>
        </div>
    </SimplePopup>
    

    <FooterBar />
</template>

<script>
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";
import SimplePopup from "../components/SimplePopup.vue";
import { ref } from 'vue';

export default {
    name: "ResetPassword",
    components: {
        NavigationBar,
        FooterBar,
        SimplePopup
    },
    data() {
        return {
            email: "",
            errorMessage: ""
        }
    },
    methods: {
        async passwordRetrieve() {
            if (this.email == "") {
                this.errorMessage = "Please input a valid email address"
            } else {
                sendPasswordResetEmail(auth, this.email)
                    .then(() => {
                        console.log("Please check your inbox for a password reset");
                        this.togglePopup();
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                    });
                this.email = "";
            }
        },
        redirect() {
            this.$router.push("/");
        }
    },
    setup() {
        const popupActive = ref(false);
        const togglePopup = () => {
            popupActive.value = !popupActive.value;
        }
        return { popupActive, togglePopup };
    }
}
</script>