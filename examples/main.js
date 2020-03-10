import Vue from 'vue'
import App from './App.vue'
import router from './router'

import KwUI from '../packages'
Vue.use(KwUI)
console.log(KwUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
