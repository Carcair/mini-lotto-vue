<template>
  <div class="home">
      <div></div>
      <home-btn v-bind:path="paths.game">Play</home-btn>
      <home-btn v-bind:path="paths.howTo">Tutorial</home-btn>
      <home-btn v-bind:path="paths.about">About</home-btn>
  </div>
</template>

<script>
import HomeBtn from './../components/btn/HomeBtn';
import {mapState} from 'vuex';

export default {
    components: {
        HomeBtn
    },
    computed: {
        ...mapState([
            'paths'
        ])
    }
}
</script>

<style scoped>
    .home {
        display: grid;
        grid-template-rows: 20% 20% 20% 20%;
        justify-content: space-around;
        text-align: center;
    }
</style>