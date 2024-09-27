import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Homepage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
  ]
})

export default router
