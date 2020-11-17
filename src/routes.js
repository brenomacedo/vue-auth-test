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
            component: () => import(/* webpackChunkName: "Login" */'./components/Login.vue'),
            beforeEnter(to, from, next) {
                if(store.getters.userIsAuth === true) {
                    next({
                        name: "home"
                    })
                } else {
                    next()
                }
            }
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
    if(from.meta.requiresAuth) {
        if(store.getters.userIsAuth === false) {
            return next({ name: "login" })
        }
        next()
    } else {
        next()
    }
})

export default router