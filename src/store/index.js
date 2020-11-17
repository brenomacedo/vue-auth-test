import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import status from './modules/status'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        status
    }
})