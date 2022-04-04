// JS
import './js/index.js';

import { createApp } from 'vue';
import App from './App.vue';
// Импорт UI компонентов
import components from './components/UI';

const app = createApp(App);

// Глобальная регистрация UI компонентов
if(!components === null){
  components.forEach(component => {
    app.component(component.name, component);
  });
};

app.mount('#app');