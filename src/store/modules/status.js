const state = []

const getters = {
    getStatus: state => state
}

const actions = {
    addStatus: ({ commit }, newStatus) => {
        commit('addStatus', newStatus)
    }
}

const mutations = {
    addStatus: (state, newStatus) => {
        state = {...state, newStatus}
    }
}

export default { state, getters, actions, mutations }