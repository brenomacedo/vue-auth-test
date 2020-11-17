import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import(/* webpackChunkName: "Login" */'./components/Login.vue'),
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* webpackChunkName: "Login" */'./components/Register.vue')
        },
        {
            path: "/home",
            name: "home",
            component: () => import(/* webpackChunkName: "Home" */'./components/Home.vue')
        }
    ]
})

export default router