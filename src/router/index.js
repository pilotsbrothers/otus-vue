import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

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
			component: MainView,
		},
		{
			path: '/catalog/:id',
			name: 'CatalogItem',
			props: (route) => ({id: route.params.id}),
			component: () => import('../views/CatalogItemView.vue'),
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/AdminView.vue')
		},
		{
			path: '/cards',
			name: 'Cards',
			component: () => import('../views/CardView.vue'),
			beforeEnter(){
				return localStorage.getItem('auth') !== 'true';
			}
		}
	],
})

export default router