import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);
console.log(process.env, '环境变量')

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/layout/layout.vue'),
    redirect: '/dashboard',
    children: [
        {
            path: 'dashboard',
            name: 'dashboard',
            meta: {
                main: true
            },
            component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard.vue'),
        }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { main: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: { main: true },
    children: [
        {
            path: 'test',
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/test/index.vue'),
    meta: { main: true },
    children: [
        // {
        //     path: 'other',
        //     name: 'other',
        //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        //     meta: { main: true }
        // }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  }
];
// console.log(process.env.BASE_URL, 8888)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPostion) {
      if (savedPostion) {
          return savedPostion
      } else {
          return { x: 0, y: 0 }
      }
  }
});

export default router;
