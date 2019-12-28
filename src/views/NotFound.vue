<template>
  <div class="notFound">
    <h1>Page not found!</h1>
    <h3>Error 404</h3>
    <back-btn/>
  </div>
</template>

<script>
import BackBtn from './../components/btn/BackBtn.vue'
export default {
    name: 'NotFound',
    components: {
      BackBtn
    }
}
</script>

<style scoped>
  .notFound {
    display: grid;
    grid-template-rows: 30% 30% 30%;
    justify-content: space-around;
    align-content: center;
    color: #F5F5F5;
    text-align: center;
  }
  .notFound h1 {margin-top: 100%}
</style>