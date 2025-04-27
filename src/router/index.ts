import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomePage.vue'
import EventPage from "@/pages/EventPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/event',
      name: 'event',
      component: EventPage,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage,
    },
  ],
})

export default router
