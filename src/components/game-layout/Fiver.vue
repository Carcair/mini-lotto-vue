<template>
  <div class="fiver">
    <fiver-btn/>
    <fiver-btn/>
    <fiver-btn/>
    <fiver-btn/>
    <fiver-btn/>
  </div>
</template>

<script>
import FiverBtn from './../btn/FiverBtn.vue';
export default {
  name: "Fiver",
  components: {
    FiverBtn
  }
}
</script>

<style scoped>
  .fiver {
    background-color: rgba(245, 245, 245, 0.5);
    border-radius: 3vh;
    grid-row: 3 / 4; grid-column: 1 / 3;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-evenly;
    align-content: space-around;
  }
</style>