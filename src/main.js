import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import i18n from './i18n'
window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

