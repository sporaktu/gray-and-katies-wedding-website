<template>
  <layout>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-card class="ma-4 pa-4">
            <v-row>
              <v-col>
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
          </v-card>
        </v-col>
        <v-col cols="6"></v-col>
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

</style>
