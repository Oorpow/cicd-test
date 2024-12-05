import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vmodel',
      name: 'usevmodel',
      component: () => import('@/views/VModelPlayground/index.vue')
    },
    {
      path: '/tsx',
      name: 'testtsx',
      component: () => import('@/views/TsxPlayground/index.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('@/views/DialogPlayground/index.vue')
    },
    {
      path: '/formily',
      name: 'formily',
      component: () => import('@/views/FormilyPlayground/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
