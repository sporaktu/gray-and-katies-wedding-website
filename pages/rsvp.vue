<template>
  <layout>
    <div :class="$style.rsvp">
      <div :class="$style['form-section']">
        <FormulateForm
          v-model="rsvpFormValues"
          :class="$style.form"
          @submit="submitForm"
          v-if="!success"
        >
          <h1 :class="$style.title">RSVP</h1>
          <div class="content">
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
              <FormulateInput type="submit" name="Submit your RSVP" v-if="!loading">
                <div v-if="loading">
                  Loading <span class="loader"></span>
                </div>
              </FormulateInput>
              <FormulateInput type="button" disabled v-else>
                <div :class="$style['loading-button']">
                  Loading <span :class="$style.loader"></span>
                </div>
              </FormulateInput>
            </div>
          </div>
          <div :class="$style.error" v-if="failed">We're having trouble submitting your RSVP right now. Try again
            later.
          </div>
        </FormulateForm>
        <FormulateForm :class="$style.form" @submit="resetForm" v-if="success">
          <div :class="$style.success">
            <h3 :class="$style.subtitle">We successfully received your submission!</h3>
            Would you like to submit another RSVP?
            <FormulateInput type="submit" name="New Submission"/>
          </div>
        </FormulateForm>
      </div>
      <div :class="$style.background"></div>
    </div>
  </layout>
</template>

<script>
import page from "@/layouts/page";

const DEFAULT_FORM_VALUES = {
  firstName: '',
  lastName: '',
  attending: false,
  plusOne: false,
  email: '',
  phone: '',
  songRequest: '',
  plusOneFirstName: '',
  plusOneLastName: ''
};

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
      loading: false,
      failed: false,
      success: false,
    }
  },
  methods: {
    submitForm() {
      const self = this;
      this.loading = true;
      this.failed = false
      this.$axios.$post('/guests', this.rsvpFormValues)
        .then(response => {
          this.loading = false;
          if (response !== 'success') {
            this.failed = true;
            return;
          }
          this.success = true;
        })
    },
    resetForm() {
      this.rsvpFormValues = DEFAULT_FORM_VALUES;
      this.loading = false;
      this.failed = false;
      this.success = false;
    }
  }
}
</script>

<style lang="scss" module>
@import "assets/design";
@import "assets/design/vueForumlateOverrides";

$spinnerSpeed: 3s;
$doneSpeed: 3.1s;
$shadow: darken($gold, 3%);

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

.error {
  color: darkred;
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

.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //font-size: 2rem;
}

//.loader-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%;
//  &:before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 50%; background: $gold; z-index: -1; transition: top 1.2s linear $doneSpeed; }
//  &:after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: $gold; z-index: -1; transition: bottom 1.2s linear $doneSpeed; }
//
//  &.done {
//    &:before { top: -50%; }
//    &:after { bottom: -50%; }
//  }
//}

.loading-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.loader {
  display: block;
  width: 16px;
  height: 16px;
  border-color: transparent #fff #fff transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  -webkit-backface-visibility: none;
  backface-visibility: none;
  transform: rotate(0deg);
  -webkit-animation: spin .5s linear infinite;
  animation: spin .5s linear infinite;
  margin-left: .5em
}

@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
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
