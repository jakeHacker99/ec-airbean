import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Menu from '@/assets/data/menu.json'
import Orders from '@/assets/data/orderHistory.json'

import BootstrapVue  from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  data(){
    return {
      menu: Menu.menu,
      orderStatus: Orders.orders
    }
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
