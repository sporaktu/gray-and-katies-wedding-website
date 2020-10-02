<template>
  <div :class="$style['admin-page']">
    <v-container>
      <slot></slot>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "admin-page"
}
</script>

<style lang="scss" module>
@import "assets/design";
.admin-page {
  background-color: $primary-background;
  *{
    font-family: Roboto,sans-serif !important;
  }
}
</style>
