<template>
  <div :class="$style.guests">
    <h1>Guests</h1>
    <div class="table">
      <div :class="$style.guest" v-for="guest in guests">{{guest.firstName}} {{guest.lastName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guests",
  data() {
    return {
      guests: []
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/guests').then(res => {
      return {guests: res.data}
    });
  }
}
</script>

<style lang="scss" module>
  .guests {

  }
</style>
