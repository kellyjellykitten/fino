<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Caption Contest</a>
    <div class="navbar-nav mr-auto" id="navbarText">
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
      </li>
    </div>
    <div v-if="!isLoggedIn" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
      </li>
    </div>
    <div v-if="isLoggedIn" class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logout">Logout</a>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
      isLoggedIn() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login')
      }
    }
}
</script>

<style type="text/css">
  a:hover {
    cursor: pointer;
  }
</style>