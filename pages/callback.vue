<template>

</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: "callback",
  mounted() {
    this.$store.commit('setUser', window.location)
    this.$axios.setToken()
  }
}
</script>

<style scoped>

</style>
