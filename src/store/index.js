import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paths: {
      home: '/',
      howTo: '/how-to',
      about: '/about',
      game: '/game',
      gameCounter: '/game/game-counter',
      gameRound: '/game/game-round',
      endGame: '/game/end-game'
    },
    socket: io('localhost:3000'),
    counter: 120,
    numbers: [],
  },
  mutations: {
    mutate_counter(state, argument) {
      state.counter = argument[0];
    },
    mutate_numbers(state, argument) {
      state.numbers = argument[0];
    }
  },
  actions: {
    action_counter(context, argument) {
      context.commit('mutate_counter', argument);
    }
  },
  modules: {
  }
})
