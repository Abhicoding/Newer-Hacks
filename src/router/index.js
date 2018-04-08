import Vue from 'vue'
import Router from 'vue-router'
// import navbar from '@/components/navbar'
import story from '@/components/story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/newstories',
      name: 'new',
      component: story
    },
    {
      path: '/topstories',
      name: 'top',
      component: story
    }
  ]
})
