import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import PageOne from './component/PageOne.vue'
// import Home from '../src/App.vue'

Vue.use(VueRouter)

const Routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/Question-1',
        component: PageOne
    }
]

createApp(App).mount('#app')
