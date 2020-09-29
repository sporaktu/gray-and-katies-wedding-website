<template>
  <div :class="[$style.navigation, {[$style.open]: open}]">
    <div :class="$style['nav-opener']">
      <Hamburger :open="open" @toggleMenu="toggleMenu"/>
    </div>
    <v-navigation-drawer
      :class="$style.links"
      v-model="open"
      absolute
      temporary
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item>
            <n-link to="/">Home</n-link>
          </v-list-item>
          <v-list-item>
            <n-link v-if="loggedIn" to="/story">Our Story</n-link>
          </v-list-item>
          <v-list-item>
            <n-link v-if="loggedIn" to="/gallery">Our Memories</n-link>
          </v-list-item>
          <v-list-item>
            <n-link v-if="loggedIn" to="/event">Event Details</n-link>
          </v-list-item>
          <v-list-item>
            <n-link v-if="loggedIn" to="/registry">Registry</n-link>
          </v-list-item>
          <v-list-item>
            <n-link v-if="loggedIn" to="/guests">Guests</n-link>
          </v-list-item>
          <v-list-item>
            <n-link to="/rsvp">RSVP</n-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
      group: null,
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
      left: 16.75rem;
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
  font-size: 2rem;
  background-color: $transparent-white-background !important;

  a {
    margin-bottom: 1rem;
  }
}
</style>
