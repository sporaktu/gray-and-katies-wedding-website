<template>
    <div class="$style.page">
      <h1>Registry</h1>
    </div>
</template>

<script>
import Layout from '../../../layouts/admin-page';

export default {
  name: 'index',
  middleware: 'auth',
  components: {Layout}
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
