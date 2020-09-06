import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import router from './Router/router.js'

Vue.use(BootstrapVue)

window.EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
