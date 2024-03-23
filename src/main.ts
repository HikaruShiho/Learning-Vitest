import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { worker } from './mocks/browser'

async function prepareApp() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    return worker.start()
  }

  return Promise.resolve()
}

const app = createApp(App)

prepareApp().then(() => app.mount('#app'));
