<template>
  <div :class="$style['wedding-party']">
    <div :class="$style.title">
      <img :class="$style.background" src="../../assets/images/accents/right-corner-bouquet.png">
      <h1 :class="$style.text">
      Wedding Party
      </h1>
    </div>
    <div :class="$style.party">
      <v-card
        :class="$style.member" v-for="member in party"
        class="mx-auto"
        max-width="500"
      >
        <v-img
          height="600px"
          :src="member.picture_url"
          class="white--text align-end"
        >
        </v-img>
        <v-card-title>{{ member.firstname }} {{ member.lastname }}</v-card-title>
        <v-card-subtitle class="pb-0">
          {{ member.role }}
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>{{ member.story }}</div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      party: null,
    };
  },
  async asyncData({$axios}) {
    return $axios.get('/wedding-party').then(res => {
      return {party: res.data};
    });
  },
};
</script>

<style lang="scss" module>
@import "assets/design";

.title {
  height: 3em;
  padding: 3em 1.5em;
  position: relative;
  margin: 8rem auto 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $translucent-white-background;
  font-size: 4rem;

  .background {
    position: absolute;
    right: -28%;
    top: -50%;
  }
  .text{
    font-size: 1em;
    color: $title-color;
  }
}


.wedding-party {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.party {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.member {
  margin-bottom: 1rem;
}
</style>
