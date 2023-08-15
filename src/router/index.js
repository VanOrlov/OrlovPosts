import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'
import Home from '@/pages/Home'
import Posts from '@/pages/Posts'
import UserList from '@/pages/UserList'
import UserPage from '@/pages/UserPage'

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/registration",
    component: Registration
  },
  {
    path: "/posts",
    component: Posts
  },
  {
    path: "/users",
    component: UserList
  },
  {
    path: "/users/:id",
    component: UserPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
