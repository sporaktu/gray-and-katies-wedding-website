<template>
  <div
    :class="[$style['menu-toggle'], {[$style.open]: open }]"
    @click="click"
  >
    <div :class="$style['hamburger']">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="$style['cross']">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hamburger",
  data() {
    return {
      open: false
    }
  },
  methods: {
    click() {
      this.open = !this.open;
      this.$emit('toggleMenu');
    }
  }
}
</script>

<style lang="scss" module>
@import "./assets/design/index.scss";

$line-width: 60px;
$menu-size: 60px;

.menu-toggle * {
  transition: .25s ease-in-out;
  box-sizing: border-box;
}


.menu-toggle {
  width: $menu-size;
  height: $menu-size;
  margin: auto;
  position: relative;
  cursor: pointer;
  background: $transparent-white-background;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: $translucent-white-background;
  }
  &.open {
    background: none;
  }
  span {
    display:block;
    background:$gold;
    border-radius:2px;
  }

  .hamburger {
    position: relative;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16% 8%;
    span {
      width: 80%;
      height: 4px;
      position: relative;
      display: block;
      background: $gold;
      border-radius: 2px;

      &:nth-child(1) {
        transition-delay: .5s;
      }

      &:nth-child(2) {
        transition-delay: .625s;
      }

      &:nth-child(3) {
        transition-delay: .75s;
      }
    }
  }

  .cross {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: rotate(45deg);

    span {
      &:nth-child(1) {
        height: 0%;
        width: 4px;
        @include absoluteCenter;
        transition-delay: 0s;
      }

      &:nth-child(2) {
        width: 0%;
        height: 4px;
        @include absoluteCenter;
        transition-delay: .25s;
      }
    }
  }
}

.menu-toggle.open {
  .hamburger {
    span {
      width: 0%;

      &:nth-child(1) {
        transition-delay: 0s;
      }

      &:nth-child(2) {
        transition-delay: .125s;
      }

      &:nth-child(3) {
        transition-delay: .25s;
      }
    }
  }

  .cross {
    span {
      &:nth-child(1) {
        height: 80%;
        transition-delay: .625s;
      }
    }

    span {
      &:nth-child(2) {
        width: 80%;
        transition-delay: .375s;
      }
    }
  }
}
</style>
