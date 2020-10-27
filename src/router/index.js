import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import New from '../views/New.vue'
import Discuss from '../views/Discuss.vue'
import Zgdygc from '../views/Zgdygc.vue'
import Blockbuster from '../views/Blockbuster.vue'
import Article from '../views/Article.vue'
import Flv from '../views/Flv.vue'
import Affect from '../views/Affect.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/new',
    name: 'New',
    component: New
  },{
    path: '/discuss',
    name: 'Discuss',
    component: Discuss
  },{
    path: '/zgdygc',
    name: 'Zgdygc',
    component: Zgdygc
  },{
    path: '/blockbuster',
    name: 'Blockbuster',
    component: Blockbuster
  },{
    path: '/article',
    name: 'Article',
    component: Article
  },{
    path: '/flv',
    name: 'Flv',
    component: Flv
  }
  ,{
    path: '/affect',
    name: 'Affect',
    component: Affect
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
