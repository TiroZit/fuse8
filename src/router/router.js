import Main from '@pages/Main'
import Auth from '@pages/Auth'
import Profile from '@pages/Profile'
import EditProfile from '@pages/EditProfile'
import Navigation from '@pages/Navigation'
import Search from '@pages/Search'
import Department from '@pages/Department'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/edit-profile',
    component: EditProfile,
  },
  {
    path: '/navigation',
    component: Navigation,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/department',
    component: Department,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
