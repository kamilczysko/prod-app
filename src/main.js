import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

import './assets/css/normalize.css'
import './assets/css/main.css'

const app = createApp(App);

const store = createStore({
    state () {
      return {
        activePageId: 0
      }
    },
    mutations: {
      setActivePage(state, id) {
        state.activePageId = id;
      }
    }
  })

app.use(router).use(store);


app.mount('#app');
