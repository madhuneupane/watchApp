<template>
    <NavigationBar />
    <h1>Reset your password</h1>
    <h2>Please fill in the required fieds below</h2>
    <form class="resetForm">
        <div id="newPassword">
            <label for="email">Email address<span class="req">*</span></label>
            <input v-model="email" type="email" name="email" id="email" placeholder="email@gmail.com">
            <p class="error">{{ errorMessage }}</p>
        </div>
        <div>
            <button type="submit" class="primaryBtn" @click.prevent="passwordRetrieve">Next</button>
        </div>
    </form>
    <router-link id="backToLogin" to="/login-page">Back to login page</router-link>
    <FooterBar />
</template>

<script>
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
    name: "ResetPassword",
    components: {
        NavigationBar,
        FooterBar
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
                        alert("Please check your inbox for a password reset");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                    });
                this.email = "";
            }
        }
    }
}
</script>