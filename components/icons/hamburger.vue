<template>
  <div :class="$style.hamburger"  @click="click">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "hamburger",
  data() {
    return {
      active: false
    }
  },
  methods: {
    click() {
      this.active = !this.active;
      this.$emit('toggleMenu');
    }
  }
}
</script>

<style lang="scss" module>
.hamburger {
  width: 2rem;
  height: 1rem;
  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: 18px;
  }

  span:nth-child(4) {
    top: 36px;
  }

  &.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
}
</style>
