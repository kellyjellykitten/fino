<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4">Log in</h1>
    </div>
  </div>
  <div class="login-box">
    <h4 class="text-center mb-5">Log in to add your own captions!</h4>
    <form class="form-group" @submit="handleLogin">
      <div class="input-field">
        <label for="name">Username</label>
        <input id="name" type="text" class="form-control" placeholder="Username" v-model="login.name" required autofocus>
        <p class="alert alert-danger" v-if="userError">{{ userError }}</p>
      </div>
      <div class="input-field">
        <br/>
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" v-model="login.password" required>
        <p class="alert alert-danger" v-if="passwordError">{{ passwordError }}</p>
      </div>
      <br/>
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
  name: 'Login',
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      userError: null,
      passwordError: null
    }
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(this.login)
      }
      const res = await fetch(`http://localhost:5000/api/auth/signin`, requestOptions)
      .then(res => res.json().then(data => ({
        data: data,
        status: res.status
      })).then(res => {
        console.log('res then', res.status, res.message)
        console.log('res', res)
        console.log('condition', res.status == 200)
        if (res.status == 200) {
          console.log('Logged in successfully')
          let payload = {
            'user': this.login.name,
            'token': res.data.accessToken
          }
          this.$store.dispatch('auth/login', payload)
          this.$router.push("/")
        } else if (res.status == 404) {
          console.log('Unauthorized', res)
          console.log('msg', JSON.stringify(res.data.message))
          this.userError = JSON.stringify(res.data.message)
          this.$store.dispatch('auth/error')
        } else if (res.status == 401) {
          console.log('Password unauthorized', res)
          console.log('pw msg', JSON.stringify(res.data.message))
          this.passwordError = JSON.stringify(res.data.message)
          this.$store.dispatch('auth/error')
        }
      }))
       console.log('res', res)
    }
  }
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


