<template>

</template>

<script>
export default {
  name: "login",
  created() {
    this.$auth0.showLock('show-lock');
  },
  auth: false
}
</script>

<style scoped>

</style>
