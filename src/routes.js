import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

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
        },
        {
            path: "/home",
            name: "home",
            component: () => import(/* webpackChunkName: "Home" */'./components/Home.vue'),
            meta: { requiresAuth: true }
        }
    ]
})

router.beforeEach((from, to ,next) => {

    console.log(store.getters.userIsAuth)
    console.log(from.meta.requiresAuth)
    if(from.meta.requiresAuth) {
        if(!store.getters.userIsAuth) {
            return next({ name: "login" })
        }

        next()
    } else {
        next()
    }
})

export default router