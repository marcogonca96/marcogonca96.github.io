import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import Header from './Footer.vue'
import 'vuetify/dist/vuetify.min.css' 

Vue.component('app-footer',Footer)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(Footer)
})
