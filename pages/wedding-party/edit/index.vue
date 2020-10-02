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
            <v-btn
              small
              class="mr-2"
              @click="editItem(item)"
              icon
            >m
            </v-btn>
            <v-btn
              small
              @click="deleteItem(item)"
              icon
            >delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
      <v-btn :class="$style['add-button']">Add Wedding Party Member</v-btn>
    </div>
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
        }
      ]
    }
  },
  methods: {
    editItem(item) {
      console.log(item)
    },
    deleteItem(item) {
      console.log(item)
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
