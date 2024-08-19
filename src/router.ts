import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Item from './pages/Item.vue'

const routes = [
    { 
        path: '/',
        name: 'home',
        component: Home,
        props: route => ({ page: route.query.page })
    },
    { 
        path: '/:id',
        name: 'item',
        component: Item,
        props: true
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router