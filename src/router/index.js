import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Residential from '../views/Residential.vue'
import Commercial from '../views/Commercial.vue'
import UsAndOurProducts from '../views/UsAndOurProducts.vue'

Vue.use(VueRouter)

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
    // component: () => import('../views/Residential.vue')
  },
  {
    path: '/commercial',
    name: 'Commercial',   
    component: Commercial 
    // component: () => import('../views/Commercial.vue')
  },
  {
    path: '/us-and-our-products',
    name: 'Us & Our Products',    
    component: UsAndOurProducts
    // component: () => import('../views/UsAndOurProducts.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"  
})

export default router
