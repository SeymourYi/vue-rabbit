// import './assets/main.css'
import '@/styles/common.scss'
import { lazyPlugin } from "@/directives/index";
import { componentPlugin } from "@/components";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { piniaPluginPersitedstata } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')

