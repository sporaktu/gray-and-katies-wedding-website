<template>
  <layout>
    <v-card class="pa-4">
      <h1>Edit Wedding Party</h1>
      <edit-table
        :items="party"
        :headers="headers"
        name-identifier="firstname"
        item-type="Wedding Party Member"
        @delete="deletePartyMember"
        @edit="editItem"
      />
    </v-card>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page';
import EditTable from '../../../components/edit/edit-table'

export default {
  name: "edit-wedding-party",
  middleware: 'auth',
  components: {Layout, EditTable},
  data() {
    return {
      party: null,
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
      const id = item === 'new' ? item : item.id;
      this.$router.push(`/wedding-party/edit/${id}`)
    },
    deletePartyMember(item) {
      this.$axios.$delete(`/wedding-party/${item.id}`)
        .then(response => {
          this.fetchWeddingParty();
        })
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
