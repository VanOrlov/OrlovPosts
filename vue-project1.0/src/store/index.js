import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: localStorage.getItem('isAuth') !== null ? JSON.parse(localStorage.getItem('isAuth')) : false,
    isAdmin: false
  },
  getters: {
  },
  mutations: {
    setIsAuth(state, bool){
      state.isAuth = bool
      localStorage.setItem('isAuth', bool);
    }
  },
  actions: {
  },
  modules: {
  }
})
