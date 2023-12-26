import { createRouter, createWebHistory } from 'vue-router'
import ListItems from '../components/ListItems.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Main',
			component: () => import('../views/MainView.vue'),
			alias: '/main',
		},
		{
			path: '/catalog',
			name: 'Catalog',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: ListItems
		},
		{
			path: '/admin',
			name: 'Admin',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/Admin.vue')
		},
		{
			path: '/cards',
			name: 'Cards',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/Cards.vue')
		}
	],
})

export default router