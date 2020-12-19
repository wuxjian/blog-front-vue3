import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "@/styles/common.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App).use(router).mount('#app')
