import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 追加開始
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// 追加終了

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 元々書いてあったapp.mout('#app')に.use(pinia)を追加
app.use(pinia).mount('#app')
