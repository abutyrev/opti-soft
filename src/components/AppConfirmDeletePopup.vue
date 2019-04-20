<template>
  <div class="card">
    <div class="card-header">
      <span>Confirm Delition</span>
      <button class="close-btn close" @click="onCancel">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="card-body">
      <p class="card-text">Are you sure you want to delete this record?</p>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="app-popup-cancel-btn btn btn-light" @click="onCancel">Cancel</button>
      <button class="app-popup-delete-btn btn btn-danger" @click="onConfirm">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AppConfirmDeletePopup',
  methods: {
    onConfirm() {
      this.$vuedals.close(true);
    },
    onCancel() {
      this.$vuedals.close();
    }
  }
};
</script>

<style scoped>
</style>
