import { createApp } from 'vue'
import App from './App.vue'

// add axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// add bootstrap, bootstrap vue3
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(VueAxios, axios)
app.use(BootstrapVue3)
app.mount('#app')
