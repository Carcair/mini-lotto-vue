<template>
  <div class="fiverBtn">
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'fiverBtn'
}
</script>

<style scoped>
  button {
    background: #3C3C3C;
    margin: 1vh;
    height: 10vh; width: 10vh;
    border-radius: 5vh;
    border: 2px solid black;
    transition: background 2s;
    font-size: 4vh; font-weight: bold;
    color: #FF5A5F;
  }
  button:hover {animation: pop 2s ease; background: radial-gradient(white, #3C3C3C)}
  @keyframes pop {
    0% {transform: scale(1);}
    50% {transform: scale(1.25);}
    100% {transform: scale(1);}
  }
</style>