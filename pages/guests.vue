<template>
  <div :class="$style.guests">
    <h1>Guests</h1>
<!--    <vuetable-->
<!--      :fields="Object.keys(guests[0])"-->
<!--      :data="guests"-->
<!--      :api-mode="false"-->
<!--    />-->
  </div>
</template>

<script>
import Vuetable from 'vuetable-2';

export default {
  name: "guests",
  components: {Vuetable},
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
