<template>
  <div class="gameCounter">
    <div id="counter">
      {{counter}}
    </div>
    <div id="loader">
      <div id="loading"></div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: 'GameCounter',
  computed: {
    ...mapState([
      'socket',
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'action_counter'
    ])
  },
  created() {
    if(this.counter <= 0){
      this.$router.push('game-round');
    }
  },
  mounted() {
    this.socket.on('COUNTER', (data) => {
      this.action_counter([data]);
      if(data <= 0){
        this.$router.push('game-round');
      }
    })
  }
}
</script>

<style scoped>
  .gameCounter{
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 2vh;
  }
  #counter {
    height: 50vh; width: 50vh;
    background: #FF5A5F;
    text-align: center;
    line-height: 50vh;
    font-size: 20vh;
    border-radius: 50%;
  }
  #loader {
    background: #F5F5F5;
    height: 5vh; width: 50vh;
    border: 2px solid #3C3C3C;
    border-radius: 2vh;
  }
  #loading {
    background: #C1839F;
    height: 5vh; width: 50vh;
    border-radius: 2vh;
    animation: load 120s linear;
  }

  @keyframes load {
    0% {width: 0}
    100% {width: 50vh}
  }

</style>