import Vue from 'vue'
import Router from 'vue-router'
// import Register from './components/Register.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import(/* webpackChunkName: "Login" */'./components/Login.vue')
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* webpackChunkName: "Login" */'./components/Register.vue')
        }
    ]
})

export default router