<template>
<div :class="$style.page">
  <slot></slot>
</div>
</template>

<script>
export default {
name: "page"
}
</script>

<style lang="scss" module>
@import "assets/design";

.page {
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>
