import { apply } from 'core-js/fn/reflect'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// const vm = new Vue({
//     render: h => h(App)
// }).$mount('#app')