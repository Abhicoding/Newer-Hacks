import Vue from 'vue'
import Router from 'vue-router'
import navbar from '@/components/navbar'
// import story from '@/components/story'

Vue.use(Router)

const routes = [
  { path: '/',
    redirect: '/newstories',
    name: 'home',
    component: navbar
  },
  {
    path: '/newstories',
    name: 'newstories',
    component: navbar
  }
]

export default new Router({
  routes,
  mode: 'history'
})
