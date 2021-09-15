<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4">Register</h1>
    </div>
  </div>

  <div class="login-box">
    <h4 class="text-center mb-5">Create an account to add your own captions!</h4>
    <form class="form-group">
      <div class="input-field">
        <label for="username">Username</label>
        <input id="username" type="text" class="form-control" placeholder="Username" required autofocus>
      </div>
      <div class="input-field">
        <br/>
        <label for="email">Email address</label>
        <input id="email" type="text" class="form-control" placeholder="Email address" required>
      </div>
      <div class="input-field">
        <br/>
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="center-align">
        <br/>
        <button class="btn btn-log btn-primary btn-block" type="submit">Register</button>
        <hr/>
        <p>Already have an account? <router-link :to="{ name: 'login' }" class="nav-link">Log In Now</router-link></p>
      </div>
    </form>
  </div>
</template>


<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
.login-box {
    width: 500px;
    height: auto;
    background-color: white;
    margin-top: 60px;
    border-radius: 5px;
    padding: 40px;
    margin: auto;
    margin-top: 60px;
    border: 1px solid #E4E6E7;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
}
</style>


<!-- <style>
  body {background-color: #e9ecef;}
</style> -->