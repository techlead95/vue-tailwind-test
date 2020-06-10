import Vue from 'vue';
import Router from 'vue-router'
import BlogPage from './pages/BlogPage'
import CoursePage from './pages/CoursePage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blogs'
    },
    {
      path: '/blogs',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/courses',
      name: 'CoursePage',
      component: CoursePage
    }
  ]
})