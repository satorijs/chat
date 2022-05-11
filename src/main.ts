import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { ElScrollbar } from 'element-plus'
import App from './App.vue'
import './index.scss'
import 'element-plus/es/components/scrollbar/style/css'
import en from './locales/en.yaml'
import zhCN from './locales/zh-CN.yaml'

const app = createApp(App)
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, 'zh-CN': zhCN },
})

app.use(i18n)
app.use(ElScrollbar)

app.mount('#app')
