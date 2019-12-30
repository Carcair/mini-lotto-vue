<template>
  <div class="gameRound">
    <drum />
    <fiver />
    <last-ball />
  </div>
</template>

<script>
import Drum from './../../components/game-layout/Drum.vue'
import Fiver from './../../components/game-layout/Fiver.vue'
import LastBall from './../../components/game-layout/LastBall.vue'

export default {
  name: 'GameRound',
  components: {
    Drum,
    Fiver,
    LastBall
  },
}
</script>

<style scoped>
  .gameRound {
    display: grid;
    grid-gap: 1vh; padding: 1vh;
    grid-template-columns: 13vw 13vw 13vw 13vw 13vw 13vw;
    grid-template-rows: 13vw 13vw 13vw;
    justify-content: space-evenly;
  }
</style>