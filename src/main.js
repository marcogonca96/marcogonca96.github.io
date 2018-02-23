import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import Header from './Header.vue'

Vue.component('app-header',Header)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
