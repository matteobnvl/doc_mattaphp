import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import vuetify from './plugins/vuetify'

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
