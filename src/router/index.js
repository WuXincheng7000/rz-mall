import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home')
const Category = () => import('views/category/Category')
const Shopcart = () => import('views/shopcart/Shopcart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/category',
    name: 'Category',
    component: Category
  }, 
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
