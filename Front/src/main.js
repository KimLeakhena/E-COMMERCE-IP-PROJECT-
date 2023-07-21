import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

import 'flowbite/dist/flowbite'
const app = createApp(App)

app.use(router)
// app.use()
app.mount('#app')
