import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"

import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from "bootstrap/dist/js/bootstrap.js"



createApp(App).use(bootstrap).use(store).use(router).mount('#app')
