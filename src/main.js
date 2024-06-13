// main.js
import { createApp } from 'vue';

import App from './App.vue';
import LoginForm from "./components/logiForm.vue";  
import Dashboard from "./components/attendenceForm.vue"; 
import Navigation from "./components/theNavigation.vue";  
import members from "./components/teamMembers.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import store from "./store/store"
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: LoginForm,
    name: 'login',
  },
  {
    path: '/attendence',
    component: Dashboard,
    name: 'attendence',
    props: true,
  },
  {
    path: '/navigation',
    component: Navigation,
    name: 'navigation',
  },
 
  {
    path: "/members",
    component: members,
  }
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
