<template>
  <layout>
    <div :class="$style['story-container']">
      <div class="px-8 py-4" :class="$style.story">
        <v-row>
          <v-col justify="center">
            <h1>Our Story</h1>
          </v-col>
        </v-row>
        <v-row v-for="chunk in chunks" :key="chunk.id">
          <v-col>
            <div :class="$style.chunk">
              {{ chunk.body }}
            </div>
          </v-col>
        </v-row>
      </div>
      <div :class="$style.background"></div>
    </div>
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
  width: 50vw;

  h1 {
    color: $title-color;
    font-size: 3rem;
  }
}

.chunk {
  font-size: 1.5rem;
}

.story-container {
  display: flex;
}

.background {
  width: 50vw;
  height: 100vh;
  background: url("https://i.imgur.com/f45y0Vlh.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
  overflow: hidden;
}

</style>
