<template>
  <div class="lastBall">
    <last-ball-btn v-bind:key="number" v-for="number in lastBall">{{number}}</last-ball-btn>
  </div>
</template>

<script>
import LastBallBtn from './../btn/LastBallBtn.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'LastBall',
  components: {
    LastBallBtn
  },
  computed: {
    ...mapGetters([
      'lastBall'
    ])
  }
}
</script>

<style scoped>
  .lastBall {
    background-color: rgba(245, 245, 245, 0.5);
    border-radius: 3vh;
    grid-row: 1 / 4; grid-column: 3 / 7;
    display: grid;
    justify-content: space-evenly;
    align-content: space-evenly;
    grid-template-columns: auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto;
  }
</style>