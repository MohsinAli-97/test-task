import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashbaord',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboardView.vue')
  },
  {
    path: '/carView',
    name: 'carView',
    component: () => import(/* webpackChunkName: "about" */ '../views/carView.vue')
  },
  {
    path: '/categoriesView',
    name: 'categoriesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/categoriesView.vue')
  },
  {
    path: '/updateCarView/:id',
    name: 'updateCarView',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/carUpdateView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
