<template>
  <div :class="$style.registry">Registry</div>
</template>

<script>
export default {
  name: 'registry',
  data() {
    return {
      selected: null,
      registry: null,
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/registry').then(res => {
      return {registry: res.data};
    })
  }
};
</script>

<style lang="scss" module>
@import "assets/design";

  .registry {
    display: block
  }
</style>
