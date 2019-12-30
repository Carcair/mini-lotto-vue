<template>
  <div class="drum" v-on:click="show=!show">
    <transition name="roll">
      <div v-if="show" id="animation">
        <p>{{lastNum}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  name: 'Drum',
  data() {
    return {
      show: true,
    }
  },
  computed: {
    ...mapState([
      'socket',
      'numbers'
    ]),
    lastNum() {
      return this.numbers[this.numbers.length - 1];
    }
  },
  methods: {
    ...mapActions([
      'action_numbers'
    ])
  },
  mounted() {
    this.socket.on('NUMBER', (data) => {
      this.action_numbers(data);
    });
  }
}
</script>

<style scoped>
  .drum {
    grid-column: 1 / 3; grid-row: 1 / 3;
  }
  #animation {
    background: #F5F5F5;
    height: 50vh; width: 50vh;
    margin: 10%;
    border-radius: 50%; border: 2px solid black;
    text-align: center;
  }

  #animation p {margin-top: 30%; font-size: 15vh; font-weight: bold}

  .roll-enter-active {animation: roll-in 0.5s;}
  .roll-leave-active {animation: roll-in 0.5s reverse;}

  @keyframes roll-in {
    0% {transform: scale(0) rotateZ(0deg) translateX(0px); opacity: 0;}
    100% {transform: scale(1) rotateZ(360deg) translate(-0px); opacity: 1;}
  }
</style>