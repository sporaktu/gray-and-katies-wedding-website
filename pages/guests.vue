<template>
<div :class="$style.guests"></div>
</template>

<script>
export default {
  name: "guests",
  middleware: ['loginRequired'],
  data() {
    return {
      guests: [],
    }
  },
  methods: {
    async getGuests() {
      const token = await this.$auth.getToken();
      console.log(token);
      console.log(this.$auth);
      this.$axios.get('/guests', {
      })
      .then(response => {
        console.log(response);
      })
    }
  },
  async asyncData({ $axios, $auth }) {
    const token = await $auth.getToken();
    console.log($auth);
    let { data } = await $axios.get('/guests');
    return { guests: data.data.guests };
  }
}
</script>

<style lang="scss" module>
  .guests {

  }
</style>
