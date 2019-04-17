<template>
  <div id="app" class="container-fluid">
    <AppTable 
      :products="$data.products"
      @update-record="onUpdateRecord()"
      @delete-record="onDeleteRecord()"
      @add-record="onAddRecord()"
    />
    <Vuedal/>
  </div>
</template>

<script>
import {Component as Vuedal} from 'vuedals';
import AppTable from './components/AppTable.vue';

export default {
  name: "app",
  components: {
    AppTable,
    Vuedal
  },
  data: function() {
    return {
      products: [
        { id: 1, name: '12', unitPrice: 3, unitsInStock: 0, discontinued: true  },
        { id: 2, name: 'Chai', unitPrice: 18, unitsInStock: 39, discontinued: false  },
        { id: 3, name: 'Chang', unitPrice: 19, unitsInStock: 17, discontinued: false  }
      ]
    }
  },
  methods: {
    onUpdateRecord(id) {
      console.log('update');
    },
    onAddRecord(record) {
      console.log('add');
    },
    onDeleteRecord(id) {

    }
  }
};
</script>

<style>
body * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app .vuedal {
  padding: 0;
}
</style>
