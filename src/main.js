// SCSS
import '@scss/style.scss';

// JS
import '@js/index.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@router/router';
// Импорт UI компонентов
import components from '@components/UI/_index';

const app = createApp(App);

// Глобальная регистрация UI компонентов
if(components.length >= 1) {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

app
  .use(router)
  .mount('#app');