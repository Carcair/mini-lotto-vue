<template>
  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer    
  }
}
</script>

<style>
  body {
    box-sizing: border-box;
    background-color: #087E8B;
    margin: 0; padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
  }

  #app {
    display: grid;
    grid-template-rows: 90vh 10vh;
  }
</style>