import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paths: {
      home: '/',
      game: '/game',
      howTo: '/how-to',
      about: '/about'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
