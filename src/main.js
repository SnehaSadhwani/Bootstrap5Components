import { createApp } from 'vue'
import './style.css'
import {routes} from './routers/index'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// import Router from "vue-router";
import { createRouter,  createWebHistory } from "vue-router";

//import "bootstrap/dist/js/bootstrap.js";
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;


// 3. Create the router instance and pass the `routes` option
const router = new createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(router);
app.mount("#app");