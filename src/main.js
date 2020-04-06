import Vue from 'vue'
import App from './App.vue'
import KwUI from '../packages'
import '../packages/theme-chalk/src/index.scss'
Vue.use(KwUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
