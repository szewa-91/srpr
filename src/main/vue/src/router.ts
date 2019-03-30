import Vue from 'vue';
import Router from 'vue-router';
import CategoriesView from './views/CategoriesView.vue';
import CategoryView from './views/CategoryView.vue';
import SoundView from './views/SoundView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
    },
    {
      path: '/:name',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/:categoryName/:soundName',
      name: 'sound',
      component: SoundView,
    },
  ],
});
