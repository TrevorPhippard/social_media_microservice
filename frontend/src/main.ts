import './assets/main.css'
import '@/assets/tailwind.css'

import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './lib/apollo'

import { router } from './router'
import App from './App.vue'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.use(router)

app.mount('#app')
