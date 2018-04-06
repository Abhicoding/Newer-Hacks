import Vue from 'vue'
import Router from 'vue-router'
// import navbar from '@/components/navbar'
import story from '@/components/story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/v0/newstories',
      name: 'new',
      component: story
    },
    {
      path: '/top',
      name: 'top',
      component: story
    }
  ]
})
