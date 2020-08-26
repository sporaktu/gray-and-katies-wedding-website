<template>
  <div :class="$style.navigation">
    <div :class="$style['nav-opener']">
      <Hamburger/>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/icons/hamburger";

export default {
  name: "Navigation",
  comments: {
    Hamburger,
  }
}
</script>

<style lang="scss" module>
.navigation {
position: fixed;
}

.nav-opener {
  position: fixed;
}
</style>
