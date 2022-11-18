<template>
  <NavigationBar />
  <div id="aboutUs">
    <h1>Meet The Seven Knights!</h1>
    <p>Loream ipsum dolor sit amet, consectetur adipiscing elt, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua</p>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Marina">
      <div class="container">
        <h2>Marina</h2>
        <p class="title">Project Manager</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Eden">
      <div class="container">
        <h2>Eden</h2>
        <p class="title">Lead Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Stephanie">
      <div class="container">
        <h2>Stephanie</h2>
        <p class="title">Lead Designer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Brian">
      <div class="container">
        <h2>Brian</h2>
        <p class="title">Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Madhu">
      <div class="container">
        <h2>Marina</h2>
        <p class="title">Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Ellie">
      <div class="container">
        <h2>Ellie</h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Pedro">
      <div class="container">
        <h2>Pedro</h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
  name: "AboutUs",
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>
