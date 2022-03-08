import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Residential from '../views/Residential.vue'
import Commercial from '../views/Commercial.vue'
import UsAndOurProducts from '../views/UsAndOurProducts.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/residential',
    name: 'Residential',    
    component: Residential    
  },
  {
    path: '/commercial',
    name: 'Commercial',   
    component: Commercial 
    
  },
  {
    path: '/us-and-our-products',
    name: 'Us & Our Products',    
    component: UsAndOurProducts    
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    window.scrollTo(0, 0);
  },
})

export default router
