const state = {
    id: undefined,
    name: undefined,
    email: undefined,
    avatar: undefined
}

const getters = {
    userId: state => state.id,
    userEmail: state => state.id,
    userName: state => state.name,
    userAvatar: state => state.avatar
}

const actions = {
    setUserId: ({ commit }, id) => {
        commit('setUserId', id)
    },
    setUserName: ({ commit }, name) => {
        commit('setUserName', name)
    },
    setUserAvatar: ({ commit }, avatar) => {
        commit('setUserAvatar', avatar)
    },
    setUserEmail: ({ commit }, email) => {
        commit('setUserEmail', email)
    }
}

const mutations = {
    setUserId: (state, id) => {
        state.id = id
    },
    setUserName: (state, name) => {
        state.name = name
    },
    setUserAvatar: (state, avatar) => {
        state.avatar = avatar
    },
    setUserEmail: (state, email) => {
        state.email = email
    }
}

export default { state, getters, actions, mutations }