import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = () => {import '../views/Home/Home'}
// const Category = () => {import '../views/Category/Category'}
// const Cart = () => {import '../views/Cart/Cart'}
// const Profile = () => {import '../views/Profile/Profile'}
import Home from '../views/Home/Home'
import Category from '../views/Category/Category'
import Cart from '../views/Cart/Cart'
import Profile from '../views/Profile/Profile'
import Detail from '../views/Detail/Detail'


//解决路由无法多次点击，此处暂时没有结局问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:'/home'},
  {path: '/home',component: Home},
  {path: '/category',component: Category},
  {path: '/cart',component: Cart},
  {path: '/profile', component: Profile},
  {path: '/detail/:id', component: Detail},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

