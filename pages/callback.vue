<template>
  <h3>Signing In...</h3>
</template>

<script>
export default {
name: "callback",
  methods: {
    fetchUser() {
      console.log(this.$route)
      if (this.$route.hash) {
        console.log(this.$route.hash)
        this.$auth.setToken(
          'auth0',
          `Bearer ${this.$route.hash.split('=')[1].split('$&')[0]}`
        )
      }
      //fetch user info from token
      this.$auth.fetchUser();
      //Schedule redirect
      setTimeout(() => {
        if (this.$route.path.includes('/callback')) {
          if (!this.$auth.user) {
            // this.$router.push('/login');
          }
          else {
            // this.$router.push('/')
          }
        }
      })
    }
  },
  mounted() {
  this.$auth0.setTokenByQuery();
  this.$router.replace('/');
  }
}
</script>

<style scoped>

</style>
