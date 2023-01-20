import { createRouter, createWebHistory } from 'vue-router'
import ProductionOverview from '../views/ProductionOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductionOverview
    }, {
      path: '/production-overview',
      name: 'production-overview',
      component: ProductionOverview
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
