<template>
  <layout>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <div class="ma-4 pa-4" :class="$style.story">
            <v-row>
              <v-col justify="center">
                <h1>Our Story</h1>
              </v-col>
            </v-row>
            <v-row v-for="chunk in chunks" :key="chunk.id">
              <v-col>
                <div class="chunk">
                  {{chunk.body}}
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="6">
          <v-img src=""></v-img>
        </v-col>
      </v-row>
    </v-container>
  </layout>
</template>

<script>
import Layout from '@/layouts/page'

export default {
  name: "index",
  components: {Layout},
  data() {
    return {
      chunks: null
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/story').then(res => {
      return {chunks: res.data}
    })
  }
}
</script>

<style lang="scss" module>
@import "assets/design";
.story {
  background-color: $translucent-white-background;

  h1 {
    color: $title-color;
  }
}

</style>
