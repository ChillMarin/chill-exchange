import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
//Me traigo router para que funcione aqui
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

// funcion de VUe vue.filter y el nombre del filtro es 'do;;ar' y permite registrar de manera similar un componente
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
