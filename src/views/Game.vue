<template>
  <div class="game">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Game',
  computed: {
    ...mapState([
      'socket',
      'numbers',
      'counter'
    ])
  },
  mounted() {
    this.socket.emit('START_COUNTER')
    if(this.counter <= 0) {
      this.$router.push('game-round');
    }
  },
}
</script>

<style scoped>
  .game {
    display: grid;
    justify-content: space-around; align-content: space-around;
  }
</style>