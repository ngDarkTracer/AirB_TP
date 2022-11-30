import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'newItem',
      component: () => import('../components/newItem.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../components/list.vue')
    },
    {
      path: '/batch_import',
      name: 'importBatch',
      component: () => import('../components/importBatch.vue')
    },
    {
      path: '/single_import',
      name: 'importSingle',
      component: () => import('../components/importSingle.vue')
    },
  ]
})

export default router
