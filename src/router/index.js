import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import AddCharacter from '@/views/AddCharacter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add-character',
      name: 'AddCharacter',
      component: AddCharacter
    }
  ]
})
