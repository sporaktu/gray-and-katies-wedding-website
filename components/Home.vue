<template>
  <div id="home" :class="$style.home">
    <div :class="$style['title-container']">
      <h1>Katie & Gray</h1>
      <h2>May 23rd, 2021</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" module>
@import "assets/design/index";
.home {
  background: url("~assets/images/StovallKaregeannesES081520-44.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: $title-color;
    @include cursive();
    font-size: 3rem;
  }

  h2 {
    color: $title-color;
    font-size: 2rem;
    @include body();
  }
}

.title-container {
  background: $transparent-white-background;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30%;
}
</style>
