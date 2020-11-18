import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import firebase from './firebase/firebase'

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
    
    if(store.getters.userIsAuth === undefined) {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                store.dispatch('setUserIsAuth', true)
                next()
            } else {
                store.dispatch('setUserIsAuth', false)
                if(from.meta.requiresAuth) {
                    next({
                        name: "login"
                    })
                } else {
                    next()
                }
            }
        })
    } else {
        if(from.meta.requiresAuth) {
            if(store.getters.userIsAuth) {
                next()
            } else {
                next({
                    name: "home"
                })
            }
        } else {
            next()
        }
    }

    
})

export default router