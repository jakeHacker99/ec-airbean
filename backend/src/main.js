import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Menu from '@/assets/data/menu.json'
import Orders from '@/assets/data/orderHistory.json'

Vue.config.productionTip = false

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
