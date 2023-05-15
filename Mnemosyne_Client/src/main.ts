import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router as router } from "./router/index.js"
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
