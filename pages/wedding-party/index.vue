<template>
  <div :class="$style['wedding-party']">
    <v-container fluid>
    <v-row align-content="space-around">
      <v-col>
        <div :class="$style.title">
          <img :class="$style.background" src="../../assets/images/accents/right-corner-bouquet.png">
          <h1 :class="$style.text">
            Wedding Party
          </h1>
        </div>
      </v-col>
    </v-row>
    </v-container>
    <v-container fluid align="center">
    <div :class="$style.party">
      <v-row align-content="space-around">
        <v-col v-for="member in bride" :key="member.id">
          <party-member :info="member" />
        </v-col>
        <v-col v-for="member in groom" :key="member.id">
          <party-member :info="member" />
        </v-col>
      </v-row>
      <v-row align-content="space-around">
        <v-col v-for="member in matronOfHonor" :key="member.id">
          <party-member :info="member" />
        </v-col>
        <v-col v-for="member in maidOfHonor" :key="member.id">
          <party-member :info="member" />
        </v-col>
        <v-col v-for="member in bestMan" :key="member.id">
          <party-member :info="member" />
        </v-col>
      </v-row>
      <v-row align-content="space-around">
        <v-col  v-for="member in bridesmaids" :key="member.id">
          <party-member :info="member" />
        </v-col>
      </v-row>
      <v-row align-content="space-around">
        <v-col  v-for="member in groomsmen" :key="member.id">
          <party-member :info="member" />
        </v-col>
      </v-row>
    </div>
    </v-container>
  </div>
</template>

<script>
import PartyMember from '../../components/party/party-member'
import Rule from '../../components/decorative/hr-eight'

export default {
  name: 'index',
  components: {PartyMember, Rule},
  data() {
    return {
      party: null,
    };
  },
  computed: {
    bride() {
      return this.filterRole('bride');
    },
    groom() {
      return this.filterRole('Groom');
    },
    matronOfHonor() {
      return this.filterRole('matronofhonor');
    },
    maidOfHonor() {
      return this.filterRole('maidofhonor');
    },
    bridesmaids() {
      return this.filterRole('bridesmaid');
    },
    groomsmen() {
      return this.filterRole('groomsman')
    },
    bestMan() {
      return this.filterRole('bestman');
    }
  },
  methods: {
    filterRole(role) {
      if (!this.party) return null;
      return this.party.filter(member => member.role === role)
    }
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
  max-width: 500px;

  .background {
    position: absolute;
    right: -28%;
    top: -50%;
  }

  .text {
    font-size: 1em;
    color: $title-color;
  }

  @media screen and (max-width: 425px) {
    padding: 1em 0.5em;

    .background {
      top: -90%;
    }
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


</style>
