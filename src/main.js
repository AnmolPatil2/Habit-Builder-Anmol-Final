import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Notifications from 'vue-notification'

import login from './components/Login.vue'
import PageNotFound from './components/Page404.vue'
import habit from './components/habit.vue'
import habits from './components/habitdetail.vue'
import register from './components/Register.vue'
import store from './components/store/index'
import VueFirestore from "vue-firestore";
window.$ = window.jQuery = require('jquery');
import "popper.js";
import "bootstrap";
import "../public/css/app.scss";

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.use(VueFirestore, {
  key: "id", // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
});
Vue.use(VueFirestore);
import Swal from "sweetalert2";
window.Swal = Swal;
Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VueRouter);
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;
const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/todo', component: habit },
  { path: "*", component: PageNotFound },
  { path: '/register', component: register },
  { name: "habits", path: '/habits:id', component: habits }

];

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
