<template>
  <div class="notFound">
    <h1>Page not found!</h1>
    <h3>Error 404</h3>
  </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
  .notFound {
    display: grid;
    grid-template-rows: 50% 50%;
    justify-content: center;
    color: #F5F5F5;
    text-align: center;
  }
  .notFound h1 {margin-top: 100%}
</style>