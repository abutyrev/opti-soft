import Vue from 'vue'
import {default as Vuedals} from 'vuedals';
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuedals);

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });
  return formatter.format(value);
});

new Vue({
  render: h => h(App)
}).$mount('#app')
