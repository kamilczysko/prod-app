import { createRouter, createWebHistory } from 'vue-router'
import ProductionOverview from '../views/ProductionOverview.vue'
import Workstations from '../views/Workstations.vue'
import Orders from '../views/Orders.vue'
import Storage from '../views/Storage.vue'
import Products from '../views/Products.vue'

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
    }, {
      path: '/workstations',
      name: 'workstatinos',
      component: Workstations
    }, {
      path: '/orders',
      name: 'orders',
      component: Orders
    }, {
      path: '/storage',
      name: 'storage',
      component: Storage
    }, {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})

export default router
