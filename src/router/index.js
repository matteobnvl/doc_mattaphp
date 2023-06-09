import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import DocsInstallView from '../views/DocsInstallView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: DocsView
  },
  {
    path: '/docs/:components',
    name: 'docs_detail',
    component: DocsInstallView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
