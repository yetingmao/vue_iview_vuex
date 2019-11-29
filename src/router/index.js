import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  loginRouter, page404, page403, page500,
} from './comment';
Vue.use(VueRouter);

const RouterConfig = {
  routes: [
    loginRouter,
    page500,
    page403,
    page404,
  ],
};

const router = new VueRouter(RouterConfig);

export default router;
