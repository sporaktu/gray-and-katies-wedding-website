<template>
  <div
    v-if="show"
    :class="$style.rsvp">
    <n-link to="/rsvp">rsvp</n-link>
  </div>
</template>

<script>
export default {
  name: "Rsvp",
  computed: {
    /**
     * Determines if the user is on the RSVP page or not. Returns whether to show the RSVP button or not.
     * @returns {boolean}
     */
    show() {
      return this.$nuxt.$route.path !== '/rsvp';
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design/index";

.rsvp {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  padding: 0.2em 0.4em;
  color: black;
  background: $translucent-white-background;
  cursor: pointer;
  font-size: 2rem;
  transition: color 0.1s cubic-bezier(0.4, 0.0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0.0, 0.2, 1), font-size 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

  &:hover {
    color: $gold;
    font-size: 4rem;
    background: $translucent-white-background;
  }
}
</style>
