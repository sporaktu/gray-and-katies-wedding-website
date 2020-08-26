<template>
  <div :class="$style.rsvp" @click="handleRsvp">
    rsvp
  </div>
</template>

<script>
export default {
  name: "Rsvp",
  methods: {
    handleRsvp() {
      console.log('RSVP')
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design/index";

.rsvp {
  @include handwritten();
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.2em 0.4em;
  color: black;
  background: rgba(#fff, 0.5);
  cursor: pointer;
  font-size: 2rem;
  transition: color 0.1s cubic-bezier(0.4, 0.0, 0.2, 1), background-color 0.1s cubic-bezier(0.4, 0.0, 0.2, 1), font-size 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

  &:hover {
    color: $gold;
    font-size: 4rem;
    background: rgba(#fff, 1);
  }
}
</style>
