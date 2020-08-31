import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Notifications from 'vue-notification'

import login from './components/Login.vue'
import PageNotFound from './components/Page404.vue'
import habit from './components/habit.vue'
import register from './components/Register.vue'
import store from './components/store/index'

const routes = [
    { path: '/', component: login },
    { path: '/login', component: login },
    { path: '/todo', component: habit },
    { path: "*", component: PageNotFound },
    { path: '/register', component: register },
]; const router = new VueRouter({
    routes,
    mode: 'history'
})