import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PageOne from './components/PageOne.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: App // This could be your main container
    },
    {
      path: '/Question-1',
      component: PageOne
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app') // Assuming your main app container has an element with id 'app'
