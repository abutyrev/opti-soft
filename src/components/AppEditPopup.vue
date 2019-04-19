<template>
  <div class="card">
    <div class="card-header">
      <span>Edit</span>
      <button class="close-btn close" @click="popupClose">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="card-body">
      <div class="container-fluid">
        <form>
          <div class="form-group row">
            <label for="productName" class="col-4 col-form-label">Product name</label>
            <div class="col-8">
              <input id="productName" type="text" class="form-control" v-model="product.name">
            </div>
          </div>
          <AppEditPopupSelector
            :selector="{id: 'unitPrice', text: 'Unit Price', value: record.unitPrice}"
          />
          <AppEditPopupSelector
            :selector="{id: 'unitsInStock', text: 'Units in Stock', value: record.unitsInStock}"
          />
          <div class="form-group row">
            <label class="col-4 col-form-label" for="discontinuedCheck">Discontinued</label>
            <div class="col-8 d-flex justify-content-start align-items-center">
              <input
                class="form-check-input m-0"
                type="checkbox"
                id="discontinuedCheck"
                v-model="product.discontinued"
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="app-popup-update-btn btn btn-primary" @click="updateRecord">Update</button>
      <button class="app-popup-cancel-btn btn btn-danger" @click="popupClose">Cancel</button>
    </div>
  </div>
</template>

<script>
import AppEditPopupSelector from "./AppEditPopupSelector.vue";

export default {
  name: "AppEditPopup",
  components: {
    AppEditPopupSelector
  },
  props: ["record", "action"],
  data: function() {
    return {
      product: {}
    };
  },
  methods: {
    popupClose() {
      this.$vuedals.close();
    },
    updateRecord() {
      this.$vuedals.close({ record: this.product });
    }
  },
  mounted: function() {
    this.product = this.record;
  }
};
</script>

<style scoped>
.app-popup-cancel-btn {
  margin-left: 5px;
}
</style>
