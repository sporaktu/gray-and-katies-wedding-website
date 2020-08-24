<template>
  <div id="home" :class="$style.home">
    <h1>Gray and Katies</h1>
    <h2>May 23rd, 2021</h2>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" module>
.home {
  h1 {
    color: blue;
    font-family: 'Crimson Pro', serif;
  }
}
</style>
