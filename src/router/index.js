import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Project from '../views/Project.vue'
import Organization from '../views/Organization.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project,
      props: true
    },
    {
      path: '/organization/:id',
      name: 'organization',
      component: Organization,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
