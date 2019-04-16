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
        props: {},
        escapable: true,
        dismissable: false
      });
    }
  }
};
</script>

<style>
</style>


