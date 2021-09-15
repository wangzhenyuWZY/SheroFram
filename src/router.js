import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./view/home.vue')
        },
        {
            path: '/Features',
            name: 'Features',
            component: () => import('./view/features.vue')
        }
    ]
})

export default router
