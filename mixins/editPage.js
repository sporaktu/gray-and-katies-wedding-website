const editPageMixin = {
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {
    submit() {
      this.loading = true;
      this.failed = false;
      this.$axios.$post(`/${this.route}`, this.values).then(res => {
        this.loading = false;
        if (res !== 'success') {
          this.failed = true;
          return;
        }
        this.success = true;
      })
    },
    cancel() {
      console.log(this.route)
      this.$router.push(`/${this.route}/edit`)
    },
    resetForm() {
      this.values = this.DEFAULT_FORM_VALUES;
      this.loading = false;
      this.failed = false;
      this.success = false;
    },
    returnToEditAll() {
      this.cancel()
    },
    checkIfEditOrNew() {
      if (this.id === 'new') return;
      this.fetchItemById(this.id);
    },
    fetchItemById(id) {
      this.loading = true;
      this.$axios.$get(`/${this.route}/${id}`).then(res => {
        this.setItemValues(res[0]);
        this.loading = false;
      })
    },
    setItemValues(response) {
      this.values = {...response};
    }
  },
  created() {
    this.checkIfEditOrNew();
  }
}

module.exports = editPageMixin;
