import Vue from 'vue'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from './router'
import './main.css'

Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
