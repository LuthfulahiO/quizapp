import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Questions from '@/pages/Questions'
import Success from '@/pages/Successful'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    },

    {
      path: '/successful',
      name: 'successful',
      component: Success
    }
  ]
})
