<template>
  <hr :style="$style.rule">
</template>

<script>
export default {
  name: "hr-eight"
}
</script>

<style lang="scss" module>
@import "../../assets/design/colors";
.rule {
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double $title-color;
  color: $title-color;
  text-align: center;
  width: 100%;
  height: 2rem;
  display: block;
}
.rule:after {
  content: "§";
  color: $title-color;
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}
</style>
