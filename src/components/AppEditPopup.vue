<template>
  <div class="card">
    <div class="card-header">
      <span>Edit</span>
      <button class="close-btn close" @click="popupClose()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="card-body">
      <p class="card-text">body</p>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="app-popup-update-btn btn btn-primary">Update</button>
      <button class="app-popup-cancel-btn btn btn-danger" @click="popupClose()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppEditPopup",
  methods: {
    popupClose() {
      var vm = this;
      vm.$vuedals.close();
    }
  }
};
</script>

<style scoped>
.app-popup-cancel-btn {
  margin-left: 5px;
}
</style>
