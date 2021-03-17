<template>
  <layout>
    <v-card class="pa-4">
      <h1>Edit Story</h1>
      <edit-table
        :items="items"
        :headers="headers"
        item-type="Story Block"
        @delete="deleteItem"
        @edit="editItem"
      />
    </v-card>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page';
import EditTable from '../../../components/edit/edit-table'

export default {
  name: "index",
  middleware: 'auth',
  components: {Layout, EditTable},
  data() {
    return {
      items: null,
      headers: [
        {
          text: 'Text',
          value: 'body'
        },
        {
          text: 'Order',
          value: 'order'
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
      this.$router.push(`/story/edit/${id}`)
    },
    deleteItem(item) {
      this.$axios.$delete(`/story/${item.id}`)
        .then(() => {
          this.fetchStory();
        })
    },
    fetchStory() {
      return this.$axios.get('/story').then(res => {
        this.party = res.data
      })
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/story').then(res => {
      return {items: res.data}
    })
  }
}
</script>

<style lang="scss" module>

</style>
