import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/assets/js/iconfont_svg.js'
import { createPinia } from 'pinia'
import '@/api/interceptors'
import i18n from './plugins/i18n'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
