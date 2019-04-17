<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th scope="col" colspan="5">
          <button class="btn btn-primary" @click="showPopup()">Add new record</button>
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
      <AppTableItem v-for="product in $props.products" :key="product.id" :product="product"/>
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
    showPopup() {
      var vm = this;
      vm.$vuedals.open({
        component: AppEditPopup,
        props: {
          record: {
            name: '',
            unitPrice: 5,
            unitsInStock: 3,
            discontinued: false
          },
          action: 'add'
        },
        escapable: true,
        dismissable: false,
        onClose(data) {
          if (data && data.record) {
            if (data.action == 'add')
              vm.$emit('add-record', data.record);
            else if (data.action == 'update')
              vm.$emit('update-record', data.record);
          }
        }
      });
    }
  }
};
</script>

<style>
</style>


