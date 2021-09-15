import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import About from '../components/About.vue'
import Image from '../views/Image.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/image/:id',
    name: 'image',
    component: Image
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
