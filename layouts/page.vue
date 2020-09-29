<template>
  <div :class="$style.page">
    <v-container :class="$style.container">
      <slot></slot>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "page"
}
</script>

<style lang="scss" module>
@import "assets/design";

</style>
