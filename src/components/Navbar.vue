<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Caption Contest</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
</style>