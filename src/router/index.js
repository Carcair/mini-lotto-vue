import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import HowTo from '../views/HowTo.vue'
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import GameCounter from '../views/Game-views/GameCounter.vue';
import GameRound from '../views/Game-views/GameRound.vue';
import EndGame from '../views/Game-views/EndGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    children: [
      {
        path: 'game-counter',
        component: GameCounter
      },
      {
        path: 'game-round',
        component: GameRound
      },
      {
        path: 'end-game',
        component: EndGame
      }
    ]
  },
  {
    path: '/how-to',
    name: 'how-to',
    component: HowTo
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
