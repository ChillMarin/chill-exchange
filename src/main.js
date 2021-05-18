import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
// fue un peo por errores de compatibilidad tuve q instalar versiones anteriores de  Char y chartkick de las nuevas q hay en 2021
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
//Me traigo router para que funcione aqui
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
//esta libreria se instala de esta manera la otra la de spinner es mas facil todo se lee en la documentacion
Vue.use(Chartick.use(Chart))
// funcion de VUe vue.filter y el nombre del filtro es 'do;;ar' y permite registrar de manera similar un componente
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
