<template>
  <layout>
    <div class="edit-registry-item"></div>
  </layout>
</template>

<script>
import Layout from '../../../layouts/admin-page'

const DEFAULT_FORM_VALUES = {
  name: '',
  url: '',
  store: '',
  picture_url: '',
  price: '',
  purchased: false,
  purchaser_first_name: '',
  purchaser_last_name: '',
  archived: false,
  date_created: null,
  date_modified: null
}

export default {
  name: 'EditRegistryItem',
  components: {Layout}
};
</script>

<style scoped>

</style>
