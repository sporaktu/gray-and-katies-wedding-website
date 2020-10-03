<template>
  <layout>
    <div :class="$style.page">
      <v-card :class="$style.table">
        <h1>Wedding Party</h1>
        <v-data-table
          v-if="party && party.length"
          class="elevation-1"
          :headers="headers"
          :items="party"
          :search="search"
          dense
        >
          <template #top>
            <v-text-field
              v-model="search"
              label="Search Wedding Party"
              class="mx-4"
            />
          </template>
          <template #item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item.id)"
              icon
            >mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="confirmDeleteItem(item)"
              icon
            >mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      <v-btn :class="$style['add-button']" @click="editItem('new')">Add Wedding Party Member</v-btn>
    </div>
    <v-dialog v-model="showConfirmation" persistent max-width="800">
      <v-card v-if="itemToDelete">
        <v-card-title class="headline">
          Are you sure you want to delete this party member?
        </v-card-title>
        <v-card-text>Are you sure you want to delete {{ itemToDelete.firstname }} {{ itemToDelete.lastname }} from the
          wedding party?
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="deletePartyMember">Yes, delete {{itemToDelete.firstname}}</v-btn>
          <v-btn color="secondary" text @click="cancelDelete">Nevermind</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page';

export default {
  name: "edit-wedding-party",
  middleware: 'auth',
  components: {Layout},
  data() {
    return {
      party: null,
      search: '',
      headers: [
        {
          text: 'First Name',
          value: 'firstname',
        },
        {
          text: 'Last Name',
          value: 'lastname',
        },
        {
          text: 'Role',
          value: 'role'
        },
        {
          text: 'Story',
          value: 'story',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ],
      itemToDelete: null,
      showConfirmation: false,
    }
  },
  methods: {
    editItem(item) {
      this.$router.push(`/wedding-party/edit/${item}`)
    },
    confirmDeleteItem(item) {
      this.itemToDelete = item;
      this.showConfirmation = true;
    },
    deletePartyMember(id) {
      this.showConfirmation = false;
      this.$axios.$delete(`/wedding-party/${this.itemToDelete.id}`)
        .then(response => {
          this.itemToDelete = null;
          this.fetchWeddingParty();
        })
    },
    cancelDelete() {
      this.showConfirmation = false;
      this.itemToDelete = null;
    },
    fetchWeddingParty() {
      return this.$axios.get('/wedding-party').then(res => {
        this.party = res.data
      })
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/wedding-party').then(res => {
      return {party: res.data}
    })
  }
}
</script>

<style lang="scss" module>
.page {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.table {
  padding: 1rem;
  width: 100%;
}

.add-button {
  margin-top: 1rem;
}
</style>
