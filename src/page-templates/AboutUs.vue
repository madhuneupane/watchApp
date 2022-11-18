<template>
  <NavigationBar />
  <div id="aboutUs">
    <h1>Meet The Seven Knights!</h1>
    <p>As nowadays we live in a flood of information, sometimes can be difficult to find the information we really want.
      The same is applied to movies, when we usually take a long time to find the program we actually want to see or we
      become lost considering the amount of movies that are released every single month, and how to get all the
      information provided.</p>
    <p>We, Seven Knights, exist to provide users with essential movie information and also the pleasure of watching
      movies. WatchApp, created by Seven Knights, allows users to quickly access the new movie information, recommend
      movies to suit their tastes, and create challenges to experience a variety of movies, helping users meet the wider
      movie world.</p>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="Marina">
      <div class="container">
        <h2>Marina</h2>
        <p class="title">Project Manager & Developer</p>
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
