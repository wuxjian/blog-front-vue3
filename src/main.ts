import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "@/styles/common.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min'

import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/bootstrap.min.css'

createApp(App).use(router).mount('#app')
