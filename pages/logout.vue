<template>
<div class="logout"></div>
</template>

<script>
export default {
name: "logout",
  methods: {
  logout() {
    this.$auth.logout();
      window.location.href = `https://grayandkatie.us.auth0.com/v2/logout?returnTo=${location.protocol.substr(
        0,
        location.protocol.length - 1
      )}%3A%2F%2F${location.host}`
    },
    redirectIfLoggedIn() {
      // schedule a redirect depending on login status
      setTimeout(() => {
        // only redirect if a logged-in user is lingering here
        if (this.$route.path.includes('/login')) {
          if (this.$auth.user) {
            this.$router.push('/');
          }
        }
      })
    }
  },
  created() {
  this.logout();
  },
  mounted() {
  this.redirectIfLoggedIn();
  }
}
</script>

<style scoped>

</style>
