import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import IvTable from './plugin'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(IvTable, {
  enableEventRename: true
})

new Vue({
  render: h => h(App)
}).$mount('#app')
