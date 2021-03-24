<template>
  <layout>
    <v-card class="pa-4">
      <h1>Edit Photo</h1>
      <v-form v-if="!success">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="values.url"
              label="Photo URL"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-text-field
              v-model="values.order"
              label="Order"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-btn
              @click="submit"
              color="primary"
            >submit
            </v-btn>
            <v-btn
              @click="cancel"
              color="secondary"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-card v-if="success">
        <h1>Successfully Updated.</h1>
        <h3>Would you like to add another or go back to the the list of registry items?</h3>
        <v-row>
          <v-col cols="2">
            <v-btn color="primary" @click="resetForm">New</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn color="secondary" @click="cancel">Back to the list</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page'
import editPageMixin from '../../../mixins/editPage'

export default {
  name: "edit-photo",
  components: {Layout},
  mixins: [editPageMixin],
  data() {
    return {
      route: 'gallery',
      loading: false,
      success: false,
      failed: false,
      values: {
        id: '',
        url: '',
        order: 0
      },
      DEFAULT_FORM_VALUES: {
        id: '',
        url: '',
        order: 0
      },
      rules: {
        order: value => {
          return typeof value === 'number' && value >= 0 || 'Order must be greater than 0'
        }
      }
    }
  },
}
</script>

<style lang="scss" module>
.story-part {
  display: block;
}
</style>
