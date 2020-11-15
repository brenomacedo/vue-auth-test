const state = {
    id: 1,
    name: 'Breno',
    avatar: 'fakepath.com'
}

const getters = {
    userId: state => state.id,
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
    }
}

export default {
    state, getters, actions, mutations
}