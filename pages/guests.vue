<template>
  <layout>
    <div :class="$style.guests">
      <h1>Guests</h1>
      <v-data-table
        v-if="guests && guests.length"
        :class="$style['guest-table']"
        class="elevation-1"
        :headers="headers"
        :items="guests"
        :search="search"
        dense
      >
        <template #top>
          <v-text-field
            v-model="search"
            label="Search Guests"
            class="mx-4"
          />
        </template>
      </v-data-table>
    </div>
  </layout>
</template>

<script>
import Layout from '../layouts/page';

export default {
  name: "guests",
  middleware: 'auth',
  components: {Layout},
  data() {
    return {
      guests: null,
      search: '',
      headers: [
        {
          text: 'First Name',
          value: 'firstname',
          align: 'start'
        },
        {
          text: 'Last Name',
          value: 'lastname'
        },
        {
          text: 'Attending',
          value: 'attending'
        },
        {
          text: 'Phone Number',
          value: 'phone'
        },
        {
          text: 'Email Address',
          value: 'email'
        },
        {
          text: 'Song Request',
          value: 'songrequest',
          filterable: false
        },
      ]
    }
  },
  computed: {},
  async asyncData({$axios}) {
    return $axios.get('/guests').then(res => {
      return {guests: res.data}
    });
  }
}
</script>

<style lang="scss" module>
.guests {
  * {
    font-family: Roboto;
  }
}
.guest-table {
  padding: 1rem;
}
</style>
