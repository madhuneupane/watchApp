<template>
  <NavigationBar />
  <h1 class="contactUsHeading">Send us a message</h1>
  <h3 class="contactUsHeading">We'd love to hear from you!</h3>

  <form>
    <div style="margin: 10px !important">
      <p class="error">{{ fillMessage }}</p>
      <div>
        <label>Email Address <span class="req">*</span></label>
        <input v-model="email" type="email" class="inputArea" placeholder="email@gmail.com" />
      </div>
      <div style="float: left">
        <label>First Name <span class="req">*</span></label>
        <input v-model="fName" type="text" class="inputArea" />
      </div>
      <div style="float: left; margin-left: 30px !important">
        <label>Last Name <span class="req">*</span></label>
        <input v-model="lName" type="text" class="inputArea" />
      </div>
      <div>
        <label>Subject <span class="req">*</span></label>
        <input v-model="subject" class="inputArea" type="subject" placeholder="Subject line" />
      </div>
      <div>
        <label>Message<span class="req">*</span></label>
        <textarea v-model="message" placeholder="Message"></textarea>
      </div>
      <button type="submit" class="primaryBtn" @click.prevent="submitMessage">
        Submit
      </button>
    </div>
  </form>
  <FooterBar />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
  name: "ContactUs",
  components: {
    NavigationBar,
    FooterBar
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
        this.email == "" ||
        this.fName == "" ||
        this.lName == "" ||
        this.subject == "" ||
        this.message == ""
      ) {
        this.fillMessage = "Please fill in all the information";
      } else {
        alert("Message submitted and shortly we'll contact you!");
      }
      this.email = "";
      this.fName = "";
      this.lName = "";
      this.subject = "";
      this.message = "";
    },
  }
}
</script>