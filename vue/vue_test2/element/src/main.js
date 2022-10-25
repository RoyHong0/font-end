import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import { Button,Row,DatePicker } from 'element-ui';
Vue.config.productionTip = false


Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-piker', DatePicker);


// Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
