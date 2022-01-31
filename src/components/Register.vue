<template>
  <div class="jumbotron text-center">
    <div class="container">
      <h1 class="display-4">Register</h1>
    </div>
  </div>

  <div class="login-box">
    <h4 class="text-center mb-5">Create an account to add your own captions!</h4>
    <p class="alert alert-danger" v-if="userError">{{ userError }}</p>
    <p class="alert alert-danger" v-if="emailError">{{ emailError }}</p>
    <p class="alert alert-danger" v-if="invalidError">{{ invalidError }}</p>
    <form class="form-group" @submit="registerUser">
      <div class="input-field">
        <label for="name">Username</label>
        <input id="name" type="text" class="form-control" placeholder="Username" v-model="register.name" required autofocus>
        
      </div>
      <div class="input-field">
        <br/>
        <label for="email">Email address</label>
        <input id="email" type="text" class="form-control" placeholder="Email address" v-model="register.email" required>
        
      </div>
      <div class="input-field">
        <br/>
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" v-model="register.password" required>
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
    name: 'Register',
    data() {
      return {
        register: {
          name: '',
          email: '',
          password: ''
        },
        emailError: null,
        userError: null,
        invalidError: null,
      }
    },
    methods: {
      async registerUser(e) {
      e.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(this.register)
      }
      console.log('req options', requestOptions)
      const res = await fetch(`http://localhost:5000/api/auth/register`, requestOptions)
      .then(res => res.json().then(data => ({
        data: data,
        status: res.status
      })).then(res => {
        console.log('res', res)
        console.log('condition', res.status == 200)
        if (res.status == 200) {
          console.log('Registered successfully')
          let payload = {
            'user': this.register.name,
            'token': res.data.accessToken
          }
          this.$store.dispatch('auth/login', payload)
          .then(() => this.$router.push("/"))
        } else if (res.status == 400) {
          console.log('Username in use', res)
          console.log('msg', JSON.stringify(res.data.message))
          this.userError = JSON.stringify(res.data.message)
          this.$store.dispatch('auth/error')
        } else if (res.status == 400) {
          console.log('Email in use', res)
          console.log('msg', JSON.stringify(res.data.message))
          this.emailError = JSON.stringify(res.data.message)
          this.$store.dispatch('auth/error')
        } else if (res.status == 500) {
          console.log('Invalid email', res)
          console.log('msg', JSON.stringify(res.data.message))
          this.invalidError = JSON.stringify(res.data.message)
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