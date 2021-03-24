<template>
  <layout>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4">
          <div class="py-8" :class="$style.header">
            <h1>Our Memories</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div :class="$style.gallery">
            <v-img
              v-for="photo in photos"
              :src="photo.url"
              :key="photo.id"
              class="ma-2"
              :class="$style.photo"
              contain />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </layout>
</template>

<script>
import Layout from '@/layouts/page'

export default {
  name: "Gallery",
  components: {Layout},
  data() {
    return {
      photos: null
    }
  },
  computed: {},
  async asyncData({$axios}) {
    return $axios.get('/gallery').then(res => {
      return {photos: res.data}
    })
  }
}
</script>

<style lang="scss" module>
@import "assets/design";

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $translucent-white-background !important;

  h1 {

    color: $title-color;
    font-size: 4rem;
  }

}
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .photo {
    grid-column: span 1;
    grid-row: span 1;

    &:nth-child(3n+1) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
</style>
