<template>
  <div>
    End Game
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'EndGame',
  computed: {
    ...mapState([
      'socket'
    ])
  },
  mounted() {
    this.socket.emit('PLAY');
  }
}
</script>

<style scoped>

</style>