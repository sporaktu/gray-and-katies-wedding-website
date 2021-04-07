<template>
<div :class="$style['party-member']">
  <v-card
    :class="$style.member"
    :key="info.id"
    class="mx-auto"
    :width="width"
  >
    <v-img
      height="600px"
      :src="info.picture_url"
      class="white--text align-end"
      fill
    >
    </v-img>
    <v-card-title>{{ info.firstname }} {{ info.lastname }}</v-card-title>
    <v-card-subtitle class="pb-0">
      {{ computeRoleName(info.role) }}
    </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ info.story }}</div>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  name: "party-member",
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    computeRoleName(role) {
      switch (role) {
        case 'bride': return 'Bride';
        case 'Groom' || 'groom': return 'Groom';
        case 'groomsman': return 'Groomsman';
        case 'bridesmaid': return 'Bridesmaid';
        case 'maidofhonor': return 'Maid of Honor';
        case 'matronofhonor': return 'Matron of Honor';
        case 'bestman': return 'Best Man';
        default: return role;
      }
    }
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 320
        case 'sm': return 400
        default: return 500
      }
    }
  }
}
</script>

<style lang="scss" module>
.member {
  margin-bottom: 1rem;
  width: 98%;
  max-width: 500px;
}
</style>
