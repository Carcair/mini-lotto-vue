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
    ])
  },
  mounted() {
    this.socket.emit('CHECK_STATE');
    this.socket.on('STATE', (data) => {
      switch(data) {
        case 0:
          this.$router.push('game-counter');
          break;
        case 1:
          this.$router.push('game-counter');
          break;
        case 2:
          this.$router.push('game-round');
          break;
        case 3:
          this.$router.push('game-round');
          break;
        case 4:
          this.$router.push('game-round');
          break;
        case 5:
          this.$router.push('end-game');
          break;
        default:
          this.$router.push('/not-found');
          break;
      }
    })
  },
}
</script>

<style scoped>
  .game {
    display: grid;
    justify-content: space-around; align-content: space-around;
  }
</style>