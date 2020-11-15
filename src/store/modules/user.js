const state = {
    id: 1,
    name: 'Breno',
    avatar: 'fakepath.com',
    isAuth: false
}

const getters = {
    userId: state => state.id,
    userName: state => state.name,
    userAvatar: state => state.avatar,
    userIsAuth: state => state.isAuth
}

const actions = {

}

const mutations = {

}

export default {
    state, getters, actions, mutations
}