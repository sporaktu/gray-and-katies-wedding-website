<template>
  <layout>
    <div :class="$style.rsvp">
      <div :class="$style['form-section']">
        <FormulateForm
          v-model="rsvpFormValues"
          :class="$style.form"
          @submit="submitForm"
        >
          <h1 :class="$style.title">RSVP</h1>
          <div :class="$style.row">
            <div :class="$style.field">
              <FormulateInput type="text" name="firstName" id="firstName" label="Your First Name"
                              validation="required|max:30,length"/>
            </div>
            <div :class="$style.field">
              <FormulateInput type="text" name="lastName" id="lastName" label="Your Last Name"
                              validation="required|max:30,length"/>
            </div>
          </div>
          <div :class="$style.row">
            <FormulateInput type="checkbox" name="attending" label="Will you be attending?"
                            :class="$style.checkbox"/>
          </div>
          <div :class="$style.attending" v-if="rsvpFormValues.attending">
            <h3 :class="$style.subtitle">Horray! We're so excited to see you!</h3>
            <div :class="$style.row">
              <FormulateInput type="checkbox" name="plusOne" label="Will you be bringing a plus one?"
                              :class="$style.checkbox"/>
            </div>
            <div :class="$style.row" v-if="rsvpFormValues.plusOne">
              <div :class="$style.field">
                <FormulateInput type="text" name="plusOneFirstName" id="firstName" label="Their First Name"
                                validation="max:30,length"/>
              </div>
              <div :class="$style.field">
                <FormulateInput type="text" name="plusOneLastName" id="lastName" label="Their Last Name"
                                validation="max:30,length"/>
              </div>
            </div>
            <div :class="$style.row">
              <div :class="$style.field">
                <FormulateInput type="tel" name="phone" id="phone" label="Your Phone Number"
                                validation="required|matches:/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/"/>
              </div>
              <div :class="$style.field">
                <FormulateInput type="email" name="email" id="email" label="Your Email" validation="required|email"/>
              </div>
            </div>
            <div :class="[$style.row, $style.wide]">
              <FormulateInput type="text" name="songRequest" id="songRequest" :class="$style['wide-input']"
                              label="Do you have a song request for the reception?"/>
            </div>
          </div>
          <div :class="[$style.row, $style.submit]">
            <FormulateInput type="submit" name="Submit your RSVP"/>
          </div>
        </FormulateForm>
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
      rsvpFormValues: {
        firstName: '',
        lastName: '',
        attending: false,
        plusOne: false,
        email: '',
        phone: '',
        songRequest: '',
        plusOneFirstName: '',
        plusOneLastName: ''
      },
    }
  },
  methods: {
    submitForm() {
      this.$axios.$post('/guests', this.rsvpFormValues)
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design";
@import "assets/design/vueForumlateOverrides";

.rsvp {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 1rem;
}

.title {
  text-align: center;
}

h3.subtitle {
  color: $gold;
  text-align: center;
  font-size: 2em;
  margin-bottom: 0.5em;
}

h4.subtitle {
  text-align: center;
  margin-bottom: 1em;
}

.form-section {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background: $less-translucent-white-background;
  padding: 2rem;
  max-height: 100vh;
  overflow-y: auto;

}

.row {
  display: flex;
  justify-content: space-between;
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

.wide-input {
  width: 100%;
}

.toggle-row {
  cursor: pointer;
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

.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

@media screen and (max-width: 1024px) {
  .row {
    flex-direction: column;
    .field {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .rsvp {
    display: block;
  }
  .form {
    padding: 1rem;
  }
  .form-section {
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .background {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
}
</style>

<style lang="scss" scoped>
label {
  font-size: 2rem;
}
</style>
