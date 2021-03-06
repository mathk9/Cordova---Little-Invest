import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyActions from '@/components/MyActions'
import Currency from '@/components/Currency'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MyActions',
      name: 'MyActions',
      component: MyActions
    },
    {
      path: '/Currency',
      name: 'Currency',
      component: Currency
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})
