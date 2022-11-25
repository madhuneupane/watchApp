<template>
  <NavigationBar />
  <div id="aboutUs">
    <h1>Meet The Seven Knights!</h1>
    <p>
      As nowadays we live in a flood of information, sometimes can be difficult
      to find the information we really want. The same is applied to movies,
      when we usually take a long time to find the program we actually want to
      see or we become lost considering the amount of movies that are released
      every single month, and how to get all the information provided.
    </p>
    <p>
      We, Seven Knights, exist to provide users with essential movie information
      and also the pleasure of watching movies. WatchApp, created by Seven
      Knights, allows users to quickly access the new movie information,
      recommend movies to suit their tastes, and create challenges to experience
      a variety of movies, helping users meet the wider movie world.
    </p>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Fmarina.jpg?alt=media&token=5399055b-2214-40f0-823e-e51534a22759"
        alt="Marina"
      />
      <div class="container">
        <h2>Marina</h2>
        <p class="title">Project Manager & Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Feden.jpg?alt=media&token=7351f5e8-69d5-40b8-a0c4-ed61810afa5e"
        alt="Eden"
      />
      <div class="container">
        <h2>Eden</h2>
        <p class="title">Lead Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Fstephanie.jpg?alt=media&token=71d98325-d020-42fd-9b7b-2fa57f02c15a"
        alt="Stephanie"
      />
      <div class="container">
        <h2>Stephanie</h2>
        <p class="title">Lead Designer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2FMadhu.jpg?alt=media&token=4039d5a8-ee88-4e3f-893e-a6774068e3c4"
        alt="Madhu"
      />
      <div class="container">
        <h2>Madhu</h2>
        <p class="title">Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Fbrian.jpg?alt=media&token=77fe0cda-d785-4d34-a87a-d7c913e74480"
        alt="Brian"
      />
      <div class="container">
        <h2>Brian</h2>
        <p class="title">Developer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Fellie.jpg?alt=media&token=05cc2d5d-78b9-4320-b847-9cc549e0fcfd"
        alt="Ellie"
      />
      <div class="container">
        <h2>Ellie</h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/app1-504b3.appspot.com/o/SevenKnightGroupPhotos%2Fpedro.jpg?alt=media&token=a983c0a1-8267-416f-ad59-ac8b5709d9df"
        alt="Pedro"
      />
      <div class="container">
        <h2>Pedro</h2>
        <p class="title">Designer</p>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "AboutUs",
  components: {
    NavigationBar,
    FooterBar,
  },
};
</script>
