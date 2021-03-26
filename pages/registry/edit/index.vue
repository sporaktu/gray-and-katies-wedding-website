<template>
  <layout>
    <v-card class="pa-4">
      <h1>Edit Registry</h1>
      <edit-table
        :items="items"
        :headers="headers"
        name-identifier="name"
        item-type="Registry Item"
        @delete="deleteItem"
        @edit="editItem"
      >
        <template #customButton>
          <v-btn class="mt-4" @click="refreshItems" color="green" light>Refresh Item Info</v-btn>
        </template>
      </edit-table>
    </v-card>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page';
import EditTable from '../../../components/edit/edit-table'

export default {
  name: 'index',
  middleware: 'auth',
  components: {Layout, EditTable},
  data() {
    return {
      items: null,
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Url',
          value: 'url'
        },
        {
          text: 'Store',
          value: 'store'
        },
        {
          text: 'Picture',
          value: 'picture_url'
        },
        {
          text: 'Price',
          value: 'price'
        },
        {
          text: 'Purchased',
          value: 'purchased'
        },
        {
          text: 'Purchaser First Name',
          value: 'purchaser_first_name'
        },
        {
          text: 'Purchaser Last Name',
          value: 'purchaser_last_name'
        },
        {
          text: 'Archived',
          value: 'archived'
        },
        {
          text: 'Created',
          value: 'date_created'
        },
        {
          text: 'Modified',
          value: 'date_modified'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        }
      ]
    }
  },
  methods: {
    editItem(item) {
      const id = item === 'new' ? item : item.id;
      this.$router.push(`/registry/edit/${id}`)
    },
    deleteItem(item) {
      this.$axios.$delete(`/registry/${item.id}`)
        .then(() => {
          this.fetchRegistry();
        })
    },
    fetchRegistry() {
      return this.$axios.get('/registry').then(res => {
        this.party = res.data
      })
    },
    refreshItems() {
      this.$axios.$post(`/registry/refresh`)
      .then(() => {
        this.fetchRegistry();
      })
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/registry').then(res => {
      return {items: res.data}
    })
  }
};
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
