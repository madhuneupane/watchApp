<template>
  <NavigationBar />
  <div class="contactContainer">
    <h2 class="contactUsHeading">Send us a message</h2>
    <p class="labelClass">We'd love to hear from you!</p>

    <form @submit.prevent="submitMessage" class="formContainer" id="formData">
      <div>
        <p class="error">{{ fillMessage }}</p>
        <div class="form_email">
          <label class="labelClass">Email Address <span class="req">*</span></label>
          <input v-model="email" type="email" class="inputArea" placeholder="email@gmail.com" />
        </div>

        <div class="nameContainer">
          <div class="lNameContainer contactFormNames">
            <label class="labelClass">First Name</label>
            <input type="text" class="inputArea" />
          </div>
          <div class="lNameContainer last contactFormNames">
            <label class="labelClass last">Last Name</label>
            <input type="text" class="inputArea" />
          </div>
        </div>

        <div class="form_subject">
          <label class="labelClass">Subject <span class="req">*</span></label>
          <input v-model="subject" class="inputArea" type="subject" placeholder="Subject line" />
        </div>
        <div class="form_message">
          <label class="labelClass">Message<span class="req">*</span></label>
          <textarea v-model="message" class="messageArea inputArea" id="description" placeholder="Message"></textarea>
        </div>

        <div class="btnContainer">
          <button type="submit" class="primaryBtn submitContact">
            Submit
          </button>
        </div>
        <SimplePopup @close="togglePopup" :popupActive="popupActive">
          <div class="popupContent">
            <div class="reviewSaved">
              <h1>Thank you for<br>your message!</h1>
              <p>We'll be contacting you shortly to discuss your inquire</p>
              <button @click="redirect" type="button" class="secondaryBtn">Go to Home</button>
            </div>
          </div>
        </SimplePopup>
      </div>
    </form>
  </div>
  <FooterBar style="width: 100%; bottom: 0; position: fixed" />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from '../components/FooterBar.vue';
import { ref } from 'vue';
import SimplePopup from '@/components/SimplePopup.vue';

export default {
  name: "ContactUs",
  components: {
    NavigationBar,
    FooterBar,
    SimplePopup
  },
  data() {
    return {
      fillMessage: "",
      email: "",
      fName: "",
      lName: "",
      subject: "",
      message: ""
    }
  },
  methods: {
    submitMessage() {
      this.fillMessage = "";
      if (
        this.email == "" &&
        this.fName == "" &&
        this.lName == "" &&
        this.subject == "" &&
        this.message == ""
      ) {
        this.fillMessage = "Please fill in all the information";
      } else {
        this.togglePopup();
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