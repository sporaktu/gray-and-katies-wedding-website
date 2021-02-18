<template>
  <div :class="$style['edit-table']">
    <v-card :class="$style.table">
      <v-data-table
        v-if="items && items.length"
        class="elevation-1"
        :headers="headers"
        :items="items"
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
            @click="editItem(item)"
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
    <v-btn :class="$style['add-button']" class="mt-2" @click="editItem('new')" color="primary">
      Add {{ itemType }}
    </v-btn>
    <v-dialog v-model="showConfirmation" persistent max-width="800">
      <v-card v-if="itemToDelete">
        <v-card-title class="headline">
          Are you sure you want to delete this {{ itemType }}?
        </v-card-title>
        <v-card-text>Are you sure you want to delete {{ itemToDelete.firstname }} {{ itemToDelete.lastname }} from the
          wedding party?
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="deleteItem">Yes, delete {{itemName}}</v-btn>
          <v-btn color="secondary" text @click="cancelDelete">Nevermind</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "edit-table",
  props: {
    items: {
      type: Object || null,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    nameIdentifier: {
      type: String,
      required: true
    },
    itemType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      search: '',
      itemToDelete: null,
      showConfirmation: false,
    }
  },
  methods: {
    editItem(item) {
      this.$emit('edit', item);
    },
    deleteItem() {
      this.showConfirmation = false;
      this.$emit('delete', this.itemToDelete)
    },
    confirmDeleteItem(item) {
      this.itemToDelete = item;
      this.showConfirmation = true;
    },
    cancelDelete() {
      this.showConfirmation = false;
      this.itemToDelete = null;
    }
  },
  computed: {
    itemName() {
      return this.itemToDelete[this.nameIdentifier];
    }
  }
}
</script>

<style lang="scss" module>
  .edit-table {
    padding: 1rem;
    width: 100%;
  }
</style>
