<template>
  <div class="game">
    <drum />
    <fiver />
    <last-ball />
  </div>
</template>

<script>
import Drum from './../components/game-layout/Drum.vue'
import Fiver from './../components/game-layout/Fiver.vue'
import LastBall from './../components/game-layout/LastBall.vue'

export default {
  name: 'Game',
  components: {
    Drum,
    Fiver,
    LastBall
  }
}
</script>

<style scoped>
  .game {
    display: grid;
    grid-gap: 1vh; padding: 1vh;
    grid-template-columns: 13vw 13vw 13vw 13vw 13vw 13vw;
    grid-template-rows: 13vw 13vw 13vw;
    justify-content: space-evenly;
  }
</style>