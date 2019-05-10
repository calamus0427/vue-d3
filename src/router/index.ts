import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import layout from '../views/layout/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
          {
                path: '/',
                name: 'home',
                component:Home
          },
          {
                path: '/test',
                name: 'test',
                component:() => import('../views/test.vue')
          },
          {
                path: '/charts',
                name: 'charts',
                component:() => import('../views/charts/index.vue')
          }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
});
