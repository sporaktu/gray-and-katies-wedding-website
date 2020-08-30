<template>
  <div :class="[$style.navigation, {[$style.open]: open}]">
    <div :class="$style['nav-opener']">
      <Hamburger @toggleMenu="toggleMenu"/>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/icons/hamburger";

export default {
  name: "Navigation",
  comments: {
    Hamburger,
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design";

$menu-width: 16rem;
.navigation {
  position: fixed;
  height: 100vh;
  top: 0;
  left: -$menu-width;
  width: $menu-width;
  background: $translucent-white-background;
  transition: left ease-in-out 0.2s;

  &.open {
    left: 0;

    .nav-opener {
      position: absolute;
      left: 0.5rem;
      right: 0.5rem;
    }
  }
}

.nav-opener {
  position: fixed;
  left: 0;
  top: 0;
  transition: right ease-in-out 0.2s, left ease-in-out 0.2s;
}
</style>
