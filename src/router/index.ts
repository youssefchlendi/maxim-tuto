import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesPage from "@/pages/MemoriesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
	path: '/memories',
	name: 'Memories',
	component: MemoriesPage
  },
  {
	path: '/memories/:id',
	name: 'MemoryDetails',
	component: () => import('@/pages/MemoryDetails.vue')
  },
  {
	path: '/memories/add',
	name: 'AddMemory',
	component: () => import('@/pages/AddMemoryPage.vue')
  },
  {
	path: '/memories/edit/:id',
	name: 'EditMemory',
	component: () => import('@/pages/EditMemoryPage.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
