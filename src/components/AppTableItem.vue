<template>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ product.unitPrice | toCurrency }}</td>
    <td>{{ product.unitsInStock }}</td>
    <td>{{ product.discontinued }}</td>
    <td>
      <button class="table-item-edite-btn btn btn-primary" @click="editRecord(product)">Edit</button>
      <button class="table-item-delete-btn btn btn-danger" @click="deleteRecord(product.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AppTableItem",
  props: ["product", "deleteRecord", "editRecord"]
};
</script>

<style scoped>
.table-item-delete-btn {
  margin-left: 5px;
}
</style>


