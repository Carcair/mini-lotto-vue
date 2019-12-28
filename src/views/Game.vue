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
  created() {
    if(this.counter <= 0){
      this.$router.push('game-round');
    }
    this.startCounter();
  },
  methods: {
    startCounter(){
      this.socket.emit('START_COUNTER');
    }
  }
}
</script>

<style scoped>
  .game {
    display: grid;
    justify-content: space-around; align-content: space-around;
  }
</style>