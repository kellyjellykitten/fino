<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4">About</h1>
      <br>
      <img src="https://i.ibb.co/mhMYdCY/20200726-141653.jpg" class="eclipse" title="My older cat, Eclipse" alt="eclipse">
    </div>
  </div>
  <div class="container">
    <p class="lead text-center">
      Built using Vue.js, this Caption Contest website allows users to register for an account and submit captions to various stock photos.
      The back-end utilizes Node.js + Express and Sequelize, with PostgreSQL serving as the database. The front-end makes different API calls to post and get user, caption, and image data. Users are registered and authenticated using JWT authentication, with password encrpytion through BCrypt.
    </p>
    <br>
    <a class="about" title="GitHub Source Code" target="_blank" href="https://github.com/kellyjellykitten/fino">View Source Code</a>
  </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>
  /* body {background-color: #e9ecef;} */
  .eclipse {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    max-width: 100%;
    height: auto;
  }
  a.about {
    display: block;
    text-align: center;
  }
</style>
