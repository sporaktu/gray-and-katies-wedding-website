<template>
  <layout>
    <v-card :class="$style['edit-registry-item']" class="pa-4">
      <h1>Edit Registry Item</h1>
      <v-form v-if="!success">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="values.name"
              label="Name"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="values.url"
              label="URL"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="values.picture_url"
              label="Picture URL"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="values.price"
              prefix="$"
              :rules="[rules.money]"
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="values.store"
              :items="stores"
              label="Store"
            />
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="values.purchased"
              label="Purchased"
            />
          </v-col>
        </v-row>
        <v-row v-if="values.purchased">
          <v-col cols="6">
            <v-text-field
              v-model="values.purchaser_first_name"
              label="Purchaser First Name"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="values.purchaser_last_name"
              label="Purchaser Last Name"
            />
          </v-col>
        </v-row>
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
      </v-form>
      <v-card v-if="success" :class="$style.success" class="ma-4 pa-4">
        <h1>Successfully Updated {{ values.name }}.</h1>
        <h3>Would you like to add someone new or go back to the the list of registry items?</h3>
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
  name: 'EditRegistryItem',
  components: {Layout},
  // mixins: [editPageMixin],
  data() {
    return {
      route: 'registry',
      loading: false,
      success: false,
      failed: false,
      values: {
        id: '',
        name: '',
        url: '',
        store: '',
        picture_url: '',
        price: '',
        purchased: false,
        purchaser_first_name: '',
        purchaser_last_name: '',
      },
      DEFAULT_FORM_VALUES: {
        id: '',
        name: '',
        url: '',
        store: '',
        picture_url: '',
        price: '',
        purchased: false,
        purchaser_first_name: '',
        purchaser_last_name: '',
      },
      stores: ['Amazon', 'Target', 'Bed, Bath and Beyond'],
      rules: {
        money: value => {
          const pattern = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;
          return pattern.test(value) || 'Invalid Dollar Amount'
        }
      }
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    submit() {
      this.loading = true;
      this.failed = false;
      console.log(this.values)
      this.$axios.$post('/registry', this.values).then(response => {
        this.loading = false;
        if (response !== 'success') {
          this.failed = true;
          return;
        }
        this.success = true;
      });
    },
    cancel() {
      this.$router.push('/registry/edit');
    },
    resetForm() {
      this.partyMemberValues = this.DEFAULT_FORM_VALUES;
      this.loading = false;
      this.failed = false;
      this.success = false;
    },
    checkIfEditOrNew() {
      if (this.id === 'new') return;
      this.fetchMemberById(this.id);
    },
    fetchMemberById(id) {
      this.loading = true;
      this.$axios.$get(`/registry/${id}`).then(response => {
        this.setPartyMemberValues(response[0]);
        this.loading = false;
      });
    },
    setPartyMemberValues(response) {
      console.log({...response})
      const {id, name, url, store, price, picture_url, purchased, purchaser_first_name, purchaser_last_name} = response;
      this.values = {id, name, url, store, price, picture_url, purchased, purchaser_first_name, purchaser_last_name};
    },
  },
  created() {
    this.checkIfEditOrNew();
  },
};
</script>

<style lang="scss" module>
.edit-registry-item {
  display: block;
}
.success {

}
</style>
