import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './page/App.vue';
import PageOne from './page/PageOne.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/Question-1',
      component: PageOne,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
