import Vue from 'vue';
import Router from 'vue-router';
import CategoriesView from './views/CategoriesView.vue';
import CategoryView from './views/CategoryView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/category/:name',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
    },
  ],
});
