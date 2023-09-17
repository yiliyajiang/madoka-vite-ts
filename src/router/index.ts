import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import("@/view/HomeView.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
