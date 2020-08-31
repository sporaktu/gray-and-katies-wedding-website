<template>
  <layout>
    <div :class="$style.rsvp">
      <div :class="$style['form-section']">
        <form
          @submit.prevent
          :class="$style.form"
        >
          <h1 :class="$style.title">RSVP</h1>
          <div :class="$style.row">
            <div :class="$style.field">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName">
            </div>
            <div :class="$style.field">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName">
            </div>
          </div>
          <div :class="[$style.row, $style.wide, $style['toggle-row']]" @click="toggleAttending">
            <label  for="attending" :class="$style.label">
              <span />
              Will you be attending?
            </label>
            <input id="attending" name="attending" type="checkbox" />
          </div>
          <div :class="$style.requests" v-if="attending">

          </div>
        </form>
      </div>
      <div :class="$style.background"></div>
    </div>
  </layout>
</template>

<script>
import page from "@/layouts/page";

export default {
  name: "rsvp",
  components: {
    layout: page
  },
  data() {
    return {
      attending: false,
    }
  },
  methods: {
    toggleAttending() {
      this.attending = !this.attending;
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design";
.rsvp {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 2rem;
}
.title {
  text-align: center;
}
.form-section {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background: $translucent-white-background;
  padding: 1rem;

}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &.wide {
    .field {
      width: 100%;
      flex-direction: row;
    }
  }

  .field {
    width: 48%;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.toggle-row {
  cursor: pointer;
}

.field {
  display: flex;
  flex-direction: column;

  input[type="text"] {
    font-size: 2rem;
  }
}
.checkbox {
  font-size: 2rem;

}

.background {
  width: 50vw;
  height: 100%;
  background: url("~assets/images/StovallKaregeannesES081520-23.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
  label {
    font-size: 2rem;
  }
</style>
