import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/assets/js/iconfont_svg.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
