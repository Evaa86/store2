import Vue from 'vue'
import VueRouter from 'vue-router'
import rs from '@/constants/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:category?/:model?',
    name: rs.HOME,
    props: true,
    component: () => import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
