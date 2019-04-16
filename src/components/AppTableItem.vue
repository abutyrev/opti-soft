<template>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ product.unitPrice | toCurrency }}</td>
    <td>{{ product.unitsInStock }}</td>
    <td>{{ product.discontinued }}</td>
    <td>
      <button
        class="table-item-edite-btn btn btn-primary"
        data-toggle="modal"
        data-target="#AppEditPopup"
      >Edit</button>
      <button class="table-item-delete-btn btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AppTableItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.table-item-delete-btn {
  margin-left: 5px;
}
</style>


