import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'



export default createStore({
  state: {
    user: null,
    isLogged: false,

    activeToggle: false
  },
  mutations: {

    SET_USER: (state, user) => state.user = user,
    SET_ISLOGGED: (state, isLogged) => state.isLogged = isLogged,

    SET_ACTIVETOGGLE: (state, activeToggle) => state.activeToggle = activeToggle



  },
  actions: {

    setUser: ({ commit }, user) => commit('SET_USER', user),
    setIsLogged: ({ commit }, isLogged) => commit('SET_ISLOGGED', isLogged),


    setActiveToggle: ({ commit }, activeToggle) => commit('SET_ACTIVETOGGLE', activeToggle)
  },
  modules: {
  }
})
