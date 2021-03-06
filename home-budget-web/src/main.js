import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

import { routes } from './routes.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChartLine, faSearchPlus, faLayerGroup, faCalendarAlt, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/dist/vuetify.min.css'

import store from './store'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCoffee)
library.add(faChartLine)
library.add(faLayerGroup)
library.add(faCalendarAlt)
library.add(faMoneyBillAlt)
library.add(faSearchPlus)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  strict: process.env.NODE_ENV !== 'production',
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
})
