import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Home.vue'
import ChatPage from './components/Chat.vue'
import TestApi from './components/TestApi.vue'
import counterPage from './components/Counter.vue'

const routes = [
    {path: '/', name: 'Home', component: HomePage},
    {path: '/chat', name: 'Chat', component: ChatPage},
    {path: '/test', name: 'TestAPI', component: TestApi},
    {path: '/counter', name: 'Counter', component: counterPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
app.use(router)
app.mount("#app")