<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col" colspan="5">
          <button class="btn btn-primary" @click="onAddNewRecordClick">Add new record</button>
        </th>
      </tr>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Units in Stock</th>
        <th scope="col">Discontinued</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <AppTableItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        :deleteRecord="onDeleteRecord"
        :editRecord="onEditRecord"
      />
    </tbody>
  </table>
</template>

<script>
import AppTableItem from "./AppTableItem.vue";
import AppEditPopup from "./AppEditPopup.vue";

export default {
  name: "AppTable",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    AppTableItem
  },
  methods: {
    onAddNewRecordClick() {
      var vm = this;
      this.$vuedals.open({
        component: AppEditPopup,
        props: {
          record: {
            name: "",
            unitPrice: 0,
            unitsInStock: 0,
            discontinued: false
          }
        },
        escapable: true,
        dismissable: false,
        onClose(data) {
          if (data && data.record) {
            vm.$emit("add-record", data.record);
          }
        }
      });
    },
    onDeleteRecord(id) {
      this.$emit("delete-record", id);
    },
    onEditRecord(product) {
      var vm = this;
      this.$vuedals.open({
        component: AppEditPopup,
        props: {
          record: product
        },
        escapable: true,
        dismissable: false,
        onClose(data) {
          if (data && data.record) {
            vm.$emit("update-record", data.record);
          }
        }
      });
    }
  }
};
</script>

<style>
</style>


