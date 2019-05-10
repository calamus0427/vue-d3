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
      redirect:'/home',
      children:[
          {
                path: '/home',
                name: 'home',
                component:() => import('../views/index.vue')
          },
          {
                path: '/graphics',
                name: 'graphics',
                component:() => import('../views/graphics/index.vue')
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
    {
      path: '*',
      component: () => import('../views/others/404.vue'),
    }
  ],
});
