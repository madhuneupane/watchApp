<template>
    <NavigationBar />
    <h1>Reset your password</h1>
    <h2>Please fill in the required fieds below</h2>
    <p class="error">{{ fillMessage }}</p>
    <form v-if="fForm">
        <div id="newPassword">
            <label for="email">Email address<span class="req">*</span></label>
            <input v-model="email" type="email" name="email" id="email" placeholder="email@gmail.com">
            <p class="error">{{ errorMessage }}</p>
        </div>
        <div>
            <button type="submit" class="primaryBtn" @click.prevent="passwordRetrieve">Next</button>
        </div>
    </form>
    <form v-if="sForm">
        <div id="newPassword">
            <label for="password">New password<span class="req">*</span></label>
            <input v-model="password" type="password" name="password" id="password">
        </div>
        <div id="newPassword">
            <label for="confirmPassword">Confirm password<span class="req">*</span></label>
            <input v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword">
        </div>
        <div>
            <button type="submit" class="primaryBtn" @click.prevent="finalRetrieve">Reset Password</button>
        </div>
    </form>

    <router-link id="backToLogin" to="/login-page">Back to login page</router-link>
    <FooterBar />
</template>

<script>
import { db } from "@/firebase";
import { query, collection, getDocs, updateDoc, doc } from "firebase/firestore";

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
            fForm: true,
            sForm: false,
            email: "",
            errorMessage: "",
            fillMessage: "",
            errorMessage2: "",
            errorMessage3: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        async passwordRetrieve() {
            this.errorMessage = "";
            if (this.email == "") {
                this.errorMessage = "Please input a valid email address"
            } else if (this.email) {
                const querySnap = await getDocs(query(collection(db, "user")));
                let i = 0;

                querySnap.forEach((doc) => {
                    const dbEmail = doc.data().email;

                    if (dbEmail == this.email) {
                        i = 1;
                        this.fForm = false;
                        this.sForm = true;
                    }
                });
                if (i == 0) {
                    alert("Sorry email missmatch");
                    this.fForm = true;
                    this.sForm = false;
                }
            }
        },
        async finalRetrieve() {
            if (this.password == "" || this.confirmPassword == "") {
                this.fillMessage = "Please fill in the required information below";
            } else if (this.password !== this.confirmPassword) {
                alert("Password and confirm password missmatch")
            } else {
                try {
                    const querySnap = await getDocs(query(collection(db, "user")));
                    // let i = 0;
                    querySnap.forEach((doc1) => {
                        const dbEmail = doc1.data().email;

                        if (dbEmail == this.email) {
                            // i = 1;
                            updateDoc(doc(db, "user", doc1.id), { "password": this.password });
                            console.log(doc1.id);
                        }
                        this.$router.push("/login-page");
                    });
                } catch (e) {
                    console.error(e);
                }
            }
        },
    }
}
</script>