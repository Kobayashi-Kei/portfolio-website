import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Works from '@/views/Works.vue'
import Research from '@/views/Research.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
  ]
})

export default router
