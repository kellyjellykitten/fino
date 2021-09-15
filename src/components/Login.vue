<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4">Log in</h1>
    </div>
  </div>
  <div class="login-box">
    <h4 class="text-center mb-5">Log in to add your own captions!</h4>
    <form class="form-group">
      <div class="input-field">
        <label for="username">Username</label>
        <input id="username" type="text" class="form-control" placeholder="Username" required autofocus>
      </div>
      <div class="input-field">
        <br/>
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="checkbox mb-3">
        <br/>
        <label>
          <input type="checkbox" value="remember-me">
          Remember me
        </label>
      </div>
      <div class="center-align">
        <br/>
        <button class="btn btn-log btn-primary btn-block" type="submit">Log in</button>
        <hr/>
        <p>Don't have an account? <router-link :to="{ name: 'register' }" class="nav-link">Register Now</router-link></p>
      </div>
    </form>
  </div>
</template>


<script>
export default {
    name: 'Login'
}
</script>


<style scoped>
.login-box {
    width: 500px;
    height: auto;
    background-color: white;
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