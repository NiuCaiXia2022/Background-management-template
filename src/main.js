import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'

// svg
import installIcons from './icons/index'

const app = createApp(App)
// svg 调用
installIcons(app)

app.use(store).use(ElementPlus).use(router).mount('#app')
