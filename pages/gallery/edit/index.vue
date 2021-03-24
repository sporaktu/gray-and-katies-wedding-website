<template>
<layout>
  <v-card class="pa-4">
    <h1>Edit Gallery</h1>
    <edit-table
      :items="items"
      :headers="headers"
      item-type="photo"
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
  name: "EditGallery",
  middleware: 'auth',
  components: {Layout, EditTable},
  data() {
    return {
      items: null,
      headers: [
        {
          text: 'Photo',
          value: 'url'
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
      this.$router.push(`/gallery/edit/${id}`)
    },
    deleteItem(item) {
      this.$axios.$delete(`/gallery/${item.id}`)
        .then(() => {
          this.fetchAll();
        })
    },
    fetchAll() {
      return this.$axios.get('/gallery').then(res => {
        this.party = res.data
      })
    }
  },
  async asyncData({$axios}) {
    return $axios.get('/gallery').then(res => {
      return {items: res.data}
    })
  }
}
</script>

<style scoped>

</style>
