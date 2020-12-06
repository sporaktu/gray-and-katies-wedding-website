<template>
  <layout>
    <v-card :class="$style['edit-user']">
      <h1>Edit User</h1>
      <v-form v-if="!success">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="partyMemberValues.firstname"
              label="First Name"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="partyMemberValues.lastname"
              label="Last Name"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              v-model="partyMemberValues.role"
              label="Role"
              required
              :items="roles"
              item-text="text"
              value="value"
            />
          </v-col>
          <v-col cols="6">
            <v-file-input
              label="File input"
              filled
              prepend-icon="mdi-camera"
              v-model="partyMemberValues.image"
            />
          </v-col>
        </v-row>
        <v-textarea
          v-model="partyMemberValues.story"
          label="Story"
        />
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
      <v-card v-if="success" :class="$style.success">
        <h1>Successfully Updated {{ partyMemberValues.firstname }} {{ partyMemberValues.lastname }}.</h1>
        <h3>Would you like to add someone new or go back to the the list of party members?</h3>
        <v-row>
          <v-col cols="2">
            <v-btn color="primary" @click="resetForm">New Party Member</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn color="secondary" @click="returnToEditWeddingParty">Back to the list</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page';

const DEFAULT_FORM_VALUES = {
  firstname: '',
  lastname: '',
  role: '',
  story: '',
  id: '',
  image: null,
};

export default {
  name: 'EditUser',
  middleware: 'auth',
  components: {Layout},
  data() {
    return {
      loading: false,
      failed: false,
      success: false,
      partyMemberValues: {
        firstname: '',
        lastname: '',
        role: '',
        story: '',
        id: '',
        image: null,
      },
      roles: [
        {text: 'Bride', value: 'bride'},
        {text: 'Groom', value: 'Groom'},
        {text: 'Maid of Honor', value: 'maidofhonor'},
        {text: 'Best Man', value: 'bestman'},
        {text: 'Bridesmaid', value: 'bridesmaid'},
        {text: 'Groomsman', value: 'Groomsman'},
        {text: 'Mother of the Bride', value: 'bridemother'},
        {text: 'Father of the Bride', value: 'bridefather'},
        {text: 'Mother of the Groom', value: 'groommother'},
        {text: 'Father of the Groom', value: 'groomfather'},
      ],
    };
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
      // console.log(this.partyMemberValues.image)
      this.savePicture();
      // this.$axios.setHeader('Content-Type', 'multipart/form-data');
      // this.$axios.post('/wedding-party', this.partyMemberValues
      //   // {headers: {'content-type': 'multipart/form-data'}}
      // )
      //   .then(response => {
      //     this.loading = false;
      //     if (response !== 'success') {
      //       this.failed = true;
      //       return;
      //     }
      //     this.success = true;
      //   })
    },
    savePicture() {
      const formData = new FormData();
      formData.set('file', this.partyMemberValues.image);
      this.$axios.post(`${process.env.baseUrl}/api/upload`, formData,
        {headers: {'content-type': 'multipart/form-data'}});
    },
    cancel() {
      this.$router.push('/wedding-party/edit');
    },
    resetForm() {
      this.partyMemberValues = DEFAULT_FORM_VALUES;
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
      this.$axios.$get(`/wedding-party/${id}`).then(response => {
        this.setPartyMemberValues(response[0]);
        this.loading = false;
      });
    },
    setPartyMemberValues(response) {
      const {id, firstname, lastname, role, picture_url, story} = response;
      this.partyMemberValues = {id, firstname, lastname, role, picture_url, story};
    },
    returnToEditWeddingParty() {
      this.$router.push('/wedding-party/edit');
    },

  },
  created() {
    this.checkIfEditOrNew();
  },
};
</script>

<style lang="scss" module>
.edit-user {
  padding: 1rem;
}

.success {
  padding: 1rem;
}
</style>
