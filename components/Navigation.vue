<template>
  <div :class="[$style.navigation, {[$style.open]: open}]">
    <div :class="$style['nav-opener']">
      <Hamburger @toggleMenu="toggleMenu"/>
    </div>
    <div :class="$style.links">
      <n-link to="/">Home</n-link>
      <n-link v-if="loggedIn" to="/story">Our Story</n-link>
      <n-link v-if="loggedIn" to="/gallery">Our Memories</n-link>
      <n-link v-if="loggedIn" to="/event">Event Details</n-link>
      <n-link v-if="loggedIn" to="/registry">Registry</n-link>
      <n-link v-if="loggedIn" to="/guests">Guests</n-link>
      <n-link to="/rsvp">RSVP</n-link>
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
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
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

$button-size: 3.75rem;

$menu-width: 16rem;
.navigation {
  position: fixed;
  height: 100vh;
  top: 0;
  left: -$menu-width;
  width: $menu-width;
  background: $translucent-white-background;
  transition: left ease-in-out 0.2s;
  padding: 4rem 2rem;

  &.open {
    left: 0;

    .nav-opener {
      position: absolute;
      left: ($menu-width - $button-size - 0.5rem);
    }
  }
}

.nav-opener {
  position: fixed;
  left: 0.5rem;
  top: 0.5rem;
  transition: right ease-in-out 0.2s, left ease-in-out 0.2s;
}

.links {
  display: flex;
  flex-direction: column;
  font-size: 3rem;

  a {
    margin-bottom: 1rem;
  }
}
</style>
