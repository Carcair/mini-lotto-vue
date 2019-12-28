<template>
  <div class="back">
    <router-link id="hl" to="/">
      <div id="btn" v-animate-css.hover="'pulse'">Back</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BackBtn'
}
</script>

<style scoped>
  #btn {
    background-color: #FF5A5F;
    color: #F5F5F5;
    height: 6vh; width: 15vh;
    text-align: center; line-height: 6vh;
    border-radius: 2vh;
    font-size: 4vh;
  }
  #hl {text-decoration: none;}
</style>