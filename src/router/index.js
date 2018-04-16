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
  },
  {
    path: '/topstories',
    name: 'topstories',
    component: navbar
  },
  {
    path: '/beststories',
    name: 'beststories',
    component: navbar
  },
  {
    path: '/askstories',
    name: 'askstories',
    component: navbar
  },
  {
    path: '/jobstories',
    name: 'jobstories',
    component: navbar
  },
  {
    path: '/showstories',
    name: 'showstories',
    component: navbar
  },
  {
    path: '/user',
    name: 'user',
    component: navbar
  }
]

export default new Router({
  routes,
  mode: 'history'
})
