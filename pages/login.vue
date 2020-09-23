<template>

</template>

<script>

export default {
  name: "login",
  mounted() {
    this.$auth.loginWith('auth0');
  }
}
</script>

<style scoped>

</style>
