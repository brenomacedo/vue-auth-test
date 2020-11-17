const state = {
    status: [
        
    ]
}

const getters = {
    getStatus: state => state.status
}

const actions = {
    addStatus: ({ commit }, newStatus) => {
        commit('addStatus', newStatus)
    },
    initializeStatus: ({ commit }, initial) => {
        commit('initializeStatus', initial)
    }
}

const mutations = {
    addStatus: (state, newStatus) => {
        state.status = [...state.status, newStatus]
    },
    initializeStatus: (state, initial) => {
        state.status = initial
    }
}

export default { state, getters, actions, mutations }